
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  vets: Vet[];
  selectedVet: Vet;
  newVet: boolean;
  vet: Vet = new Vet();

  vetDialog: boolean;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.refreshVet();
  }

  refreshVet() {
    this.apiService.get('api/vets/').subscribe(res => {
      console.log(res);
      this.vets = res;
    });
  }

  showDialogToAdd() {
    this.newVet = true;
    this.vet = new Vet();
    this.vetDialog = true;
  }
  save() {
    this.apiService.post('api/vets/', this.vet).subscribe(res => {
      this.refreshVet();
    });
    this.vetDialog = false;
  }

  // ----------
  viewVet(select: Vet) {
    console.log(JSON.stringify(select));

  }

  showUpdateVet() {
    this.newVet = true;
    this.vet = new Vet();
    this.vetDialog = true;
  }

  addVet(name: string, surname: string, telephone: string, email: string, clinic: string) {
    const newVet = new Vet(name, surname, telephone, email, clinic);
    this.apiService.post('api/vets/', newVet).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
    this.refreshVet();
  }

  editVet(name: string, surname: string, telephone: string, email: string, clinic: string) {
    const replace = new Vet(name, surname, telephone, email, clinic);
    this.apiService.put('api/vets/' + this.selectedVet.id, replace).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
    this.refreshVet();
    this.vetDialog = false;
  }

  deleteVet() {
    this.apiService.delete('api/vets/' + this.selectedVet.id).subscribe(res => {
      this.refreshVet();
    });
  }

}

//------------ 
class Vet {
  id: number;
  name: string;
  surname: string;
  telephone: string;
  email: string;
  clinic: string;

  constructor(name?: string, surname?: string, telephone?: string, email?: string, clinic?: string) {
    this.name = name;
    this.surname = surname;
    this.telephone = telephone;
    this.email = email;
    this.clinic = clinic;
  }
}



