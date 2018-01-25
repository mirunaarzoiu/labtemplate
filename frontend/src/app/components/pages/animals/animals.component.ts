import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];
  selectedAnimal: Animal;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.refresh();
   
  }

  refresh() {
    this.apiService.get('api/animals').subscribe(res =>{    
    this.animals = res;
    console.log(this.animals[0].name);
   });
 }

  viewAnimal(select: Animal) {
    console.log(JSON.stringify(select));

  }

  delete() {
    this.apiService.delete('api/animals/' + this.selectedAnimal.id).subscribe(res => {
        this.refresh();
    });
}  

  deleteAnimal(select: Animal) {
    this.apiService.delete('api/animals/' + select.name).subscribe(res => {
      console.log(res);
      window.location.reload();
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


