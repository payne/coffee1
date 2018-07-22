import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDrinkerDetailComponent } from './coffee-drinker-detail.component';

describe('CoffeeDrinkerDetailComponent', () => {
  let component: CoffeeDrinkerDetailComponent;
  let fixture: ComponentFixture<CoffeeDrinkerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeDrinkerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDrinkerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
