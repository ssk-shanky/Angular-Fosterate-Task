import { Component,ElementRef,ViewChild, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  info={
    name:'',
    email:'',
    phno:'',
    website:'',
    landline:'',

    Address:" "
  }
  constructor(public employeeinfo:EmployeeService) { }

  ngOnInit(): void {
    this.employeeinfo.nav_element = 'Add'
    if(this.employeeinfo.num_elements == false){
      this.info={...this.employeeinfo.employeelist[this.employeeinfo.index]}
    }
  }
  edit(){
    this.employeeinfo.nav_element = 'edit'
  }
  displaydetails(emp:object,x:number):void{
    this.employeeinfo.index = x
    this.info = {...this.employeeinfo.employeelist[x]}
  }
  delete(){
    if((this.employeeinfo.employeelist.length)==1){
      this.employeeinfo.num_elements=true
    }
    this.employeeinfo.employeelist.splice(this.employeeinfo.index,1)
    this.info={...this.employeeinfo.employeelist[this.employeeinfo.index]}
  }
}
