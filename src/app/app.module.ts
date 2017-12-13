import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { KidsComponent } from './kids/kids.component';
import { KidDetailComponent } from './kid-detail/kid-detail.component';
import { KidService } from './kid.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    KidsComponent,
    KidDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [KidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
