import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { Idata } from '../../models/Idata';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postform',
  standalone: false,
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.css'
})
export class PostformComponent implements OnInit {
  
  private _postservices = inject(PostService);
  private _userservice = inject(UserService);
  private _activatedroute = inject(ActivatedRoute);
  private router = inject(Router)
  postform = new FormGroup({
    postdata : new FormControl("",[Validators.required]),
    postimg: new FormControl("")  
  })

  postId: string | null = null;
  
  getValidationState(controllerName: keyof typeof this.postform.value, errorType: string) {
    return this.postform.controls[controllerName].errors?.[errorType] && this.postform.controls[controllerName].dirty
  }
  ngOnInit(): void {
    this._activatedroute.params.subscribe({
      next: (params) => {
        this.postId = params?.['postId'];

        if(this.postId) {
          const post = this._postservices.posts.find((post) => post.id === this.postId)

          if(post) {
            this.postform.controls.postdata.setValue(post.postdata);
            if(post.img)
            this.postform.controls.postimg.setValue(post.img);
          }
        }
      },
      complete: () => {},
      error: () => {}
    })
  }
  
get postdataController() {
  return this.postform.controls.postdata
}

get postimgController() {
  return this.postform.controls.postimg
}


 
 onSubmit() {
 if(this.postId)
 {
  if(this.postform.controls.postdata.value)
  this._postservices.editpost(this.postform.controls.postdata.value , this.postform.controls.postimg.value , this.postId);
  this.router.navigate(['']);
}
else
{
   if(this.postform.controls.postdata.value  )
   {
     const postdata : Idata = {
       id: (Math.random() * Number(new Date())).toFixed().toString(), postdata: this.postform.controls.postdata.value, img: this.postform.controls.postimg.value,
       date: new Date().toISOString(),
       userid: this._userservice.logedUser!.id
     }
     this._postservices.addPost(postdata);
     this.router.navigate(['']);
    
   }

 }
}
}
