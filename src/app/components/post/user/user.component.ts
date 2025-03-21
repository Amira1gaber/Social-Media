import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../models/Iuserdata';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input() userData: IUser | undefined =  {
    username: "",

    userImg: '',
    id: '',
    password: ''
  }
  
  @Input() postdate : string
  = "";
 


}
