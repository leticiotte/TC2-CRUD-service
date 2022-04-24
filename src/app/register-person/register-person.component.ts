import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Person } from '../model/person';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {

  name:string
  birthDate:string
  photo:string

  constructor(
    private service : WebService
  ) { }

  register(){
    const person: Person = {
      _id:0,
      name:this.name,
      birthDate: new Date(this.birthDate),
      photo: this.photo
    }
    if(this.service.registerPerson(person)){
      alert("Pessoa cadastrada com sucesso!")
    }else{
      alert("Pessoa já adicionada")
    }
  }
  ngOnInit(): void {
  }

}
