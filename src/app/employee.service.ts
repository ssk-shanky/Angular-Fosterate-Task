import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public nav_element = 'Add'
  public num_elements = false
  public index = 0
  public employeelist=[
  {name:'Harsha Vardhan Pendyala',email:'harsha@fosterate.com',phno:'7777888855',website:'www.technovert.com',landline:'0522 235 7220',Address:"\t Hyderabad\n\t\t telangana\n\t\t 500085"},
  {name:'Network Duke',email:'duke@fosterate.com',phno:'7777888855',website:'www.technovert.com',landline:'0522 235 7221',Address:"\t Pune\n\t\t maharashtra\n\t\t 500061"},
  {name:'Arshaque Mohammed',email:'arshaque@fosterate.com',phno:'7777888855',website:'www.technovert.com',landline:'0522 235 7223',Address:"\t Bangalore\n\t\t karnataka\n\t\t 500070"},]

  constructor() { }
}
