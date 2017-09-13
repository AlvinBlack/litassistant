import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'

@Component({
  selector: 'recommended-lits',
  templateUrl: './recommended-lits.component.html',
  styleUrls: ['./recommended-lits.component.scss']
})
export class RecommendedLitsComponent implements OnInit {
  private selectedId = 0;
  
  constructor(private service: DataService) { }

  ngOnInit() {
  }
  select(num){
    this.selectedId = num;
  }
}
