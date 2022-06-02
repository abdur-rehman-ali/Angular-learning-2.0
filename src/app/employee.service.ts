import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      { 'id':1, 'name':'Ali','age':20 },
      { 'id':2, 'name':'Joyia','age':21 },
      { 'id':3, 'name':'Rimaan','age':22 },
      { 'id':4, 'name':'Nisha','age':23 },
    ];
  }
}
