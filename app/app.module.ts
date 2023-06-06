import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BooknowService } from './services/booknow-guard.service';
import { AuthService } from './services/auth.service';
import { PlacenameService } from './services/placename.service';
import { HotelnameService } from './services/hotelname.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule.forRoot()
   
  ],

  bootstrap: [AppComponent],
  providers:[BooknowService,AuthService,PlacenameService,HotelnameService ]
})
export class AppModule { }
