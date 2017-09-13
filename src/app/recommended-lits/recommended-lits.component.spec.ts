import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedLitsComponent } from './recommended-lits.component';

describe('RecommendedLitsComponent', () => {
  let component: RecommendedLitsComponent;
  let fixture: ComponentFixture<RecommendedLitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedLitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
