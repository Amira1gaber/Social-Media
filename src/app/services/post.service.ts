import { inject, Injectable } from '@angular/core';
import { Ipost } from '../components/models/Iposts';
import { Idata } from '../components/models/Idata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  http = inject(HttpClient);
  posts:Idata[] = [];
  getPosts() {
    
   
    this.http.get<Idata[]>('http://localhost:3000/posts').subscribe({
      next: (posts) => {
        this.posts = posts;
        
      }
    })
  }


 addPost(postdata : Idata ){
   
    this.posts.push(postdata);
    this.http.post("http://localhost:3000/posts", postdata).subscribe({
      complete:()=>{
          console.log("post added");
      },

      error:()=>{
        setTimeout(() => {
          this.posts = this.posts.filter((p) => p.id !== postdata.id)
        }, 4000)
      }
    })

 }
deletePost(id : string)
{

    const oldPosts = [...this.posts];

    const postIdx = this.posts.findIndex((post) => post.id === id);

    this.posts.splice(postIdx, 1, );

    this.posts = this.posts.filter(
      (post) => post.id != id
    )

    this.http.delete("http://localhost:3000/posts/" + id).subscribe({
      error: () => {
        this.posts = oldPosts;
      }
    });
}
editpost(postdata : string , postimg : string|null , id : string)
{
  const index = this.posts.findIndex((post)=> post.id === id )
  const oldPost = {...this.posts[index]};
  if(index != -1)
  {
  const post : Idata = {
    ...this.posts[index],
    img : postimg,
    postdata  
  }
  this.posts[index] = post;

  this.http.patch("http://localhost:3000/posts/" + id, post).subscribe({
    complete: () => {
      console.log("Post Updated")
    },
    error: () => {
      setTimeout(() => {
        this.posts[index] = oldPost;
      }, 4000)
    }
  })
} 
}

}
