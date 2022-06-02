import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  public data : any[]=[];
  constructor(private _student_data_service:StudentDataService) { }

  ngOnInit(): void {
    this._student_data_service.getData()
        .subscribe(dt => this.data = dt)
  }

}
