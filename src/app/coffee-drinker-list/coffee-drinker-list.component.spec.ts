import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDrinkerListComponent } from './coffee-drinker-list.component';

describe('CoffeeDrinkerListComponent', () => {
  let component: CoffeeDrinkerListComponent;
  let fixture: ComponentFixture<CoffeeDrinkerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeDrinkerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDrinkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
