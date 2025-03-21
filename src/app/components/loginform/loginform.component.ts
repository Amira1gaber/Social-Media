import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-loginform',
  standalone: false,
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  private useservice = inject(UserService); 

  
  errorMessage = this.useservice.errorMessage
  

  loginform = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
    
  })
  onlogin() {
    const controller = this.loginform.controls;
   
      this.useservice.login(controller.username.value , controller.password.value);
    
  }
}
