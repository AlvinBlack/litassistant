import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { DataService } from '../data.service'
import { Comment,MockComments } from "../mockdata" 
@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  @Input()
  id:number[];
  private comments = [];
  constructor(private service: DataService) { }
  ngOnInit(){
    var i = 0;
    for (i; i < this.id.length; i++){
      this.comments.push(this.service.comments[this.id[i]-1])
    }
    console.log(this.id)
  }
  test(e){

    console.log(e.target.innerHTML)
  }
}
