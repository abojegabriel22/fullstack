import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

@NgModule({
  // All the component and pipes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // All modules
  imports: [
      BrowserModule
    // BrowserModule,
    // AppRoutingModule
  ],
  // All the services
  providers: [],


  // only and only main component 
  bootstrap: [AppComponent]
})


export class AppModule { }

// this was inside bootstrap 
// 