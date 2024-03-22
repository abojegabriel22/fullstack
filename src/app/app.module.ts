import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/Search/search.component';
import { QuickSearch } from './Home/QuickSearch/quickSearch.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { HomeService } from './services/home.service';
import { listingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app-routing.modules';
import { listingService } from './services/listing.service';


@NgModule({
  // All the component and pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    QuickSearch,
    MyUpperPipe,
    listingComponent
  ],
  // All modules
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
      // BrowserModule,
  ],
  // All the services
  providers: [
    HomeService,
    listingService
  ],


  // only and only main component 
  bootstrap: [AppComponent]
})


export class AppModule { }

// this was inside bootstrap 
// 

// router is just like a module 