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
  newStaff: boolean;
  staff: Staff = new Staff();

  animalDialog: boolean;

  staffDialog: boolean;

  animals: Animal[];
  selectedAnimal: Animal;
  newAnimal: boolean;
  animal: Animal=new Animal();

  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
     this.refreshStaff();
     this.refreshAnimal();
  }

  refreshStaff() {
    this.apiService.get('api/employees/').subscribe(res => {
      console.log(res);
      this.staffs = res;
    });
 }


  refreshAnimal() {
    this.apiService.get('api/animals/').subscribe(res => {
      console.log(res);
      this.animals = res;
    });
 }


 // ------------- ANIMALS

  viewAnimal(select: Animal) {
    console.log(JSON.stringify(select));

  }

  showUpdateAnimal() {
    this.newAnimal = true;
    this.animal= new Animal();
    this.animalDialog =true;
  }

  addAnimal(type:string,name:string, gender:string, age:number, size:string, vaccines:string, history:string) //works
  {
    const newAnimal = new Animal(type,name, gender, age, size, vaccines, history);
    this.apiService.post('api/animals/',newAnimal).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });
    this.refreshAnimal();

  }
  
  editAnimal(type:string,name:string, gender:string, age:number, size:string, vaccines:string, history:string) {
    const replace = new Animal(type,name, gender, age, size, vaccines, history);
    this.apiService.put('api/animals/' + this.selectedAnimal.id, replace).subscribe(res => {
      console.log(res);
    }, error =>{
      console.log(error);
    });
    this.refreshAnimal();
    this.animalDialog = false;
}


// -------------- STAFF

  viewStaff(select: Staff) {
    console.log(JSON.stringify(select));

  }

  showUpdateStaff() {
    this.newStaff = true;
    this.staff= new Staff();
    this.staffDialog =true;
  }

  deleteStaff() {
    this.apiService.delete('api/employees/' + this.selectedStaff.id).subscribe(res => {
        this.refreshStaff();
    });
}  

editStaff(name:string, surname:string, telephone:number, email:string) {
  const replace =new Staff(name,surname,telephone,email);
  this.apiService.put('api/employees/'+this.selectedStaff.id, replace).subscribe(res => {
    console.log(res);
  }, error =>{
    console.log(error);
  });
  this.refreshStaff();
  this.staffDialog = false;
}

  addStaff(name:string, surname:string, telephone:number, email:string)
  {
    const newStaff = new Staff(name,surname,telephone,email);
    this.apiService.post('api/employees/',newStaff).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    });
    this.refreshStaff();

  }
  findStaffID(): number {
    return this.staffs.indexOf(this.selectedStaff);
 }

}


//------------ 

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

