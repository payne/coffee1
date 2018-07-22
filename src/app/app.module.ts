import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoffeeDrinkerListComponent } from './coffee-drinker-list/coffee-drinker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeDrinkerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
