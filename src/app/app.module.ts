import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTestComponent } from './form-test/form-test.component';
import { SecondTestComponent } from './second-test/second-test.component';
import { DataService } from './services/data.service';
import { DataShowComponent } from './data-show/data-show.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    SecondTestComponent,
    DataShowComponent
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
