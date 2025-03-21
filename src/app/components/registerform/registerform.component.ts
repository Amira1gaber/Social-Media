import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../models/Iuserdata';

@Component({
  selector: 'app-registerform',
  standalone: false,
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})
export class RegisterformComponent {
updateImagePreview() {
throw new Error('Method not implemented.');
}
  
  private userservice = inject(UserService);
  registerform = new FormGroup({
    username : new FormControl(),
    password : new FormControl(),
    userimg: new FormControl()
    
  })
imagePreview: any;
  onAddNewUser() {
    const controller = this.registerform.controls;
    const user : IUser =  
    {
      id: (Math.random()* Number(new Date())).toFixed().toString(),
      username: controller.username.value,
      password: controller.password.value,
      userImg: controller.userimg.value
    }
    this.userservice.register(user)    ;
  }
}
