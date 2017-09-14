import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'

@Component({
  selector: 'recommended-lits',
  templateUrl: './recommended-lits.component.html',
  styleUrls: ['./recommended-lits.component.scss']
})
export class RecommendedLitsComponent implements OnInit{
  
  constructor(private service: DataService) { }
  ngOnInit(){
    console.log(this.service.articles)
  }
}
