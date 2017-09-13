import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { DataService } from '../data.service'
import { Comment,MockComments } from "../mockdata" 
@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnChanges {
  @Input()
  id:number;
  private comments:Comment[];
  constructor(private service: DataService) { }

  ngOnChanges(changes) {
  this.comments = this.service.getCommentsById(this.id)
  console.log(this.comments)
  }
  test(e){

    console.log(e.target.innerHTML)
  }
}
