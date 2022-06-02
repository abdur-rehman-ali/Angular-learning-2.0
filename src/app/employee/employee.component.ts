import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee_list : any[] = [];

  
  constructor(private employee_service:EmployeeService) { }

  ngOnInit(): void {
    this.employee_list = this.employee_service.getEmployees();
  }

}
