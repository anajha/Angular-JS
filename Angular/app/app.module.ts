
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import {routes} from './app.router';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,routes],
  declarations: [ AppComponent, ProductListComponent, AboutComponent, ServicesComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap:    [ AppComponent, ProductListComponent, AboutComponent, ServicesComponent ]
})

export class AppModule { }