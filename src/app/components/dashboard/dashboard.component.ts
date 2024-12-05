import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { Student } from '../../model/student';
import { error } from 'console';
import {NgbAlert, NgbNav, NgbNavOutlet} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgbAlert,NgbNavOutlet,NgbNav,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  studentList : Student[] = [];
  studentObj : Student = new Student();

    constructor(private service:AllservicesService){

    }

    ngOnInit(): void {
         this.service.getAllStudent().subscribe((res:any)=>{
          this.studentList=res;
         })
    }

    editStudent(st:Student){
      this.studentObj=st;
      this.service.editStudent(st).subscribe((res:any)=>{
        alert('student will be edited')
        this.ngOnInit();
        // this.studentObj=new Student();
       },error=>{
        alert("failed to edit student")
      })
      
    }

    deleteStudent(idx:number){
      this.service.deleteStudent(idx).subscribe((res:any)=>{
        this.ngOnInit();
      alert("student deleted")

      },error=>{
        alert("failed to delete student")
      })
    }
}
