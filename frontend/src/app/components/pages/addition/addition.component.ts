import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.less']
})
export class AdditionComponent implements OnInit {

  staffs: Staff[];
  selectedStaff: Staff;

  animals: Animal[];
  selectedAnimal: Animal;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
     this.staff();
     this.animal();
  }

  staff() {
    this.apiService.get('api/employees/').subscribe(res => {
      console.log(res);
      this.staffs = res;
    });
 }


  animal() {
    this.apiService.get('api/animals/').subscribe(res => {
      console.log(res);
      this.animals = res;
    });
 }

  viewAnimal(select: Animal) {
    console.log(JSON.stringify(select));

  }

  deleteAnimal() {
    this.apiService.delete('api/animals/' + this.selectedAnimal.id).subscribe(res => {
        this.animal();
    });
}  

  addAnimal(type:string,name:string, gender:string, age:number, size:string, vaccines:string, history:string)
  {
    const newAnimal = new Animal(type,name, gender, age, size, vaccines, history);
    this.apiService.post('api/animals/',newAnimal).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }

  viewStaff(select: Staff) {
    console.log(JSON.stringify(select));

  }

  deleteStaff() {
    this.apiService.delete('api/employees/' + this.selectedStaff.id).subscribe(res => {
        this.staff();
    });
}  

  addStaff(name:string, surname:string, telephone:number, email:string)
  {
    const newStaff = new Staff(name,surname,telephone,email);
    this.apiService.post('api/employees/',newStaff).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });

  }

}

class Staff {
  id:number;
  name:string;
  surname:string;
  telephone:number;
  email:string;

  constructor (name?:string,surname?:string,telephone?:number,email?:string) {
   this.name = name;
   this.surname = surname;
   this.telephone = telephone;
   this.email = email;
  }
}


class Animal {
  id:number;
  type:string;
  vaccines:string;
  age:number;
  history:string;
  name:string;
  gender:string;
  size:string; //medium,small,large

  constructor (type?:string,name?:string, gender?:string, age?:number, size?:string, vaccines?:string, history?:string) {
   this.type = type;
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.size = size;
   this.vaccines = vaccines;
   this.history = history;
  }
}

