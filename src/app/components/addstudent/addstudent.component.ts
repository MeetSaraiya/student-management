import { Component, inject } from '@angular/core';
import { Student } from '../../model/student';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AllservicesService } from '../../services/allservices.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertSelfclosing } from '../../alert-popup/alert-popup.component';
import { RouterOutlet ,RouterLink,RouterLinkActive,RouterModule } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [FormsModule,NgbAlertModule,NgbdAlertSelfclosing,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {
  jsonUrl : string = "";
  studentObj : Student = new Student();
  studentList : Student[]=[];
  dummy:any;
  http = inject(HttpClient);

  stuentService : AllservicesService = inject(AllservicesService);

  constructor(){
    this.jsonUrl="http://localhost:3000/studentList";
  }

  onAdd(){
    console.log(this.studentObj);
    this.stuentService.addStudent(this.studentObj).subscribe((result)=>{
      this.dummy=true;
      alert("student added")
      this.dummy=false;}
      ,error=>{
        alert("failed to delete student")
      });
  }
}
