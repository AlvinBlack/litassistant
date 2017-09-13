import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecommendedLitsComponent } from './recommended-lits/recommended-lits.component';
import { MyLitsComponent } from './my-lits/my-lits.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DataService } from './data.service';
import { CommentsComponent } from './comments/comments.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecommendedLitsComponent,
    MyLitsComponent,
    HomepageComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
