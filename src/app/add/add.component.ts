import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  constructor(public employeeinfo:EmployeeService) { }
  public fb = new FormBuilder()
  detailsform = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phno:['',Validators.required],
      landline:['',],
      website:[''],
      Address:[''],
  })
  ngOnInit(): void {
    this.edit(this.employeeinfo.index)
  }
  x = 0
  addinfo(){
    if(this.detailsform.value.name==""||this.detailsform.value.email==""||this.detailsform.value.phno==""){
      alert("Name,Email,Mobile fields are required")
    }
    else{
    if(this.employeeinfo.nav_element=='edit'){
    this.employeeinfo.employeelist[this.x]={...this.detailsform.value}
    alert("Contact has been edited")
    }
    else{
      this.employeeinfo.employeelist.push(this.detailsform.value)
      this.employeeinfo.num_elements=false
      alert("Contact has been added to the list")
    }
  }
  }
  edit(i:number){
    this.x=this.employeeinfo.index
    if(this.employeeinfo.nav_element=='edit'){
    this.detailsform=this.fb.group({
      name:[this.employeeinfo.employeelist[i].name,Validators.required],
      email:[this.employeeinfo.employeelist[i].email,Validators.required],
      phno:[this.employeeinfo.employeelist[i].phno,Validators.required],
      landline:[this.employeeinfo.employeelist[i].landline,],
      website:[this.employeeinfo.employeelist[i].website],
      Address:[this.employeeinfo.employeelist[i].Address],
    })
  }
}
}
