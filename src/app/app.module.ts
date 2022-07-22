import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
