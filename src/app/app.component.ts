import { Component, inject, OnInit } from '@angular/core';
import { Ipost } from './components/models/Iposts';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'socialapp';
  private _postservices = inject(PostService);
  private _userservices = inject(UserService);

 get postservices()
 {
  return this._postservices;
 }

 get userservices()
 {
  return  this._userservices;
 }
 ngOnInit(): void {
  this.postservices.getPosts();
  this.userservices.getUsers();
}

 
}
