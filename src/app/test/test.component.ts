import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "ali joyia";
  public message = "Welcome to my world";
  public person ={
    'name':'ali joiya',
    'email':'alijoyia@gmail.con'
  }

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
