import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { MypicsService } from './service/mypics.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
  ],
  providers: [MypicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
