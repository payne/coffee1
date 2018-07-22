import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoffeeDrinkerListComponent } from './coffee-drinker-list/coffee-drinker-list.component';
import { CoffeeDrinkerDetailComponent } from './coffee-drinker-detail/coffee-drinker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeDrinkerListComponent,
    CoffeeDrinkerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
