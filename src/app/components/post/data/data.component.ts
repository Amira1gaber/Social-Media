import { Component, Input } from '@angular/core';
import { Idata } from '../../models/Idata';

@Component({
  selector: 'app-data',
  standalone: false,
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent  {
@Input() postdata : Idata = {
  id: "",
  postdata: '',
  img: "",
  date: new Date().toISOString(),
  userid: ''
}
}
