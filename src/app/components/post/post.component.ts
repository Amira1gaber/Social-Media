import { Component, inject, Input } from '@angular/core';
import { Ipost } from '../models/Iposts';
import { PostService } from '../../services/post.service';
import { Idata } from '../models/Idata';
import { UserService } from '../../services/user.service';
import { IUser } from '../models/Iuserdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent 
{
  private _postservices = inject(PostService);
  private _users = inject(UserService); 
  private route = inject(Router);
  
  @Input() post : Idata = {
    id: '',
    postdata: '',
    date: new Date().toISOString(),
    userid: ''
  }
  hidden = false;
  hidepost() {
  this.hidden = true;
  }

  
  deletepost()
  {
    this._postservices.deletePost(this.post.id);
  }
  get_post_user(id : string)
  {
    const emptyuser : IUser = {
      id: '',
      username: '',
      password: ''
    };
    const user =  this._users.getuserbyid(id);
    if(user)
      {
        return user;
      }
      return emptyuser;
      
      
    } 
    
    editpost(id : string) {
       this.route.navigate(['editPost',id]);
    }
    
    isauthuser()
    {
      if (this.post.userid === this._users.logedUser?.id)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    

}

