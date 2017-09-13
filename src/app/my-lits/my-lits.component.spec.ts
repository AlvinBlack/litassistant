import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLitsComponent } from './my-lits.component';

describe('MyLitsComponent', () => {
  let component: MyLitsComponent;
  let fixture: ComponentFixture<MyLitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
