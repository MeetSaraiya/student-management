import { Component, Input, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Student } from '../model/student';
import { AllservicesService } from '../services/allservices.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css'
})
export class ModalComponentComponent {
  @Input() public st! : Student;

  constructor(private service:AllservicesService,public modalService:NgbModal){ 
       
  }

  ngOnInit(){
    console.log("Came to modal",this.st)
  }

  editStudent2(st:Student){
    this.st=st;
    debugger;
    this.service.editStudent(st).subscribe((res:any)=>{
      console.log('edit');   
     },error=>{
      alert("failed to edit student")
    })
    
  }

}
