import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
public getAllStudentList:any;
public studentForm: FormGroup | undefined | any
constructor(private studentService: StudentsService, private fb:FormBuilder){}

 async ngOnInit(){
    await this.GetAllStudentList();
      
  }

  createForm() {
    this.studentForm = this.fb.group({
      sfirstname: this.fb.control<string>(''),
      slastname: this.fb.control<string>(''),
      address: this.fb.control<string>(''),
    })
  }

  public async GetAllStudentList(){
    this.getAllStudentList = await this.studentService.GetAllStudentList().subscribe((response) =>{
      this.getAllStudentList =response;
      console.log("getAllStudentList : ", response);
    })
  }

 public SaveStudent(){
  console.log("Student Submition : ", this.studentForm.value);
  }

}
