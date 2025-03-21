import { inject, Injectable } from '@angular/core';
import { IUser } from '../components/models/Iuserdata';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  router = inject(Router);
  logedUser: IUser | null = null;
  errorMessage = new BehaviorSubject<string>(''); // Stores the latest error message

  users : IUser[] = 
  [ ]

     getUsers() {
        
       
        this.http.get<IUser[]>('http://localhost:3000/users').subscribe({
          next: (users) => {
            this.users = users;
            
          }
        })
      }
    getuserbyid(id : string )
    {
      return this.users.find((user)=> user.id === id );
      
    }
    login(userName: string, password: string) {
      for(let i = 0; i < this.users.length; i++) {
        if(this.users[i].username.toLowerCase() === userName.toLowerCase() && this.users[i].password === password) {
          this.logedUser = this.users[i];
          this.router.navigate(['']);
          break;
        }
        else 
        {
          this.setError('Invalid data');
          
        }
        
      }
      
    }
    
    setError(message: string) {
      this.errorMessage.next(message);
    }
    register(newUser: IUser) {
  this.users.push(newUser);
  this.http.post("http://localhost:3000/users", newUser).subscribe({
    complete:()=>{
        console.log("user added");
    },

    error:()=>{
      setTimeout(() => {
        this.users = this.users.filter((p) => p.id !== newUser.id)
      }, 5000)
    }
  })
  this.router.navigate(['login']);
}

logOut() {
  this.logedUser = null;
}

}
