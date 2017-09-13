import { Injectable } from '@angular/core';

import { Article,Comment,MockArticles,MockComments } from './mockdata';

@Injectable()
export class DataService {
  private articles;
  private comments;

  constructor() {
    this.init();
    }
  private init(){
          this.getArticles();
          this.getComments(); 
          } 
  getArticles(){
    this.articles = MockArticles;
  }
  getComments(){
    this.comments = MockComments;
    console.log(this.comments)
  }


  getCommentsById(id:number):Comment[] {
    var tempComments=[];
    for(var i = 0;i < this.comments.length; i++){
      if(this.comments[i].articleId === id){
        tempComments.push(this.comments[i]);
      }
    }
    return tempComments;
  }

}
