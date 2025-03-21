import { Component, inject, input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  
  title = 'socialapp';
  private postservices = inject(PostService);
  private usersService = inject(UserService);
  
  get posts() {
    return this.postservices.posts;
  }
  
  
  
  get currentUser() {
    return this.usersService.logedUser;
  }


 
}
