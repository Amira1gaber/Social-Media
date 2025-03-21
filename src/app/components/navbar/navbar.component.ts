import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private userserver = inject(UserService);
  get currentuser()
  {
    return this.userserver.logedUser
  } 
  logOut() {
  this.userserver.logOut();
  }
}
