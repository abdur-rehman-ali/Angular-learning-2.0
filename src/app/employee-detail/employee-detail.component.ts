import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employee_list : any[] = [];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee_list = this.employeeService.getEmployees();
  }

}
