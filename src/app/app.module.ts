import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTestComponent } from './form-test/form-test.component';
import { SecondTestComponent } from './second-test/second-test.component';
import { DataService } from './services/data.service';
import { DataShowComponent } from './data-show/data-show.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    SecondTestComponent,
    DataShowComponent,
    RouteTestComponent,
    PeopleComponent,
    PersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
