import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {

  id: number = 0;
  name:string
  birthDate:string
  photo:string
  peopleList : Person[] = []

  onSubmit() : void{
    const person: Person = {
      _id: this.id,
      name:this.name,
      birthDate: new Date(this.birthDate),
      photo: this.photo
    }
    if(!this.getPessoa(person)){
      this.adicionarPessoa(person);
      this.id++;
      console.log(person)
    }else{
      alert("Pessoa já adicionada")
    }
  }

  adicionarPessoa(person:Person) : void{
      this.peopleList.push(person)
      alert("Pessoa adicionada com sucesso")
  }

  getPessoa(getPessoa:Person) : boolean{
    const index = this.peopleList.findIndex(p =>
      p.name.toUpperCase() === getPessoa.name.toUpperCase()
      )
    if (index > -1) {
      return true;
    } else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
