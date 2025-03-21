import { Component } from '@angular/core';
import { Icomment } from '../../models/Icomment';


@Component({
  selector: 'app-comments',
  standalone: false,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements Icomment {
comment:string;
constructor()
{
  this.comment="";
}
}
