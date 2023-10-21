import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateSupermarketComponent } from './update-supermarket/update-supermarket.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermarketComponent,
    AddComponent,
    UpdateSupermarketComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
