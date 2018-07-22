import { Component, OnInit } from '@angular/core';
import { CoffeeDrinkerService } from '../coffee-drinker.service';
import { ICoffeeDrinker } from '../coffee-drinker';

@Component({
  selector: 'app-coffee-drinker-list',
  templateUrl: './coffee-drinker-list.component.html',
  styleUrls: ['./coffee-drinker-list.component.css']
})
export class CoffeeDrinkerListComponent implements OnInit {
  coffeeDrinkers: ICoffeeDrinker[] = [];
  errorMessage: string;

  constructor(private coffeeDrinkerService: CoffeeDrinkerService) { }

  ngOnInit() {
    this.coffeeDrinkerService.getCoffeeDrinkers().subscribe(
      drinkers => { this.coffeeDrinkers = drinkers; },
      error => this.errorMessage = <any>error
    );
  }

}
