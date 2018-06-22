import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SessionsComponent } from './sessions/sessions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SessionContentComponent } from './session-content/session-content.component';

import { RouterModule } from "@angular/router" ;
import { DataService } from './data.service';

var routes = [
  {
    path : "",
    component : CoursesComponent
  },
  {
    path : ":coursedisplay",
    component : SessionsComponent
  },
  {
    path : ":coursedisplay/:sessiondisplay",
    component : SessionContentComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "",
    redirectTo: "courses",
    pathMatch : "full"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SessionsComponent,
    LoginComponent,
    RegisterComponent,
    SessionContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
