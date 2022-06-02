import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from "./employee.service";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentDataService } from './student-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
