import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
    http = inject(HttpClient);
    urlStr = "http://localhost:3000/studentList";
    constructor() { }
    getAllStudent(){
      return this.http.get(this.urlStr);
    }

    addStudent(stud:Student){
      return this.http.post(this.urlStr,stud);
    }

    editStudent(stud:Student){
      return this.http.put(this.urlStr+'/'+stud.id,stud);
    }

    deleteStudent(id:number){
      return this.http.delete(this.urlStr+'/'+id);
    }
}
