import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Person } from '../model/person';
import { WebService } from '../service/web.service';
import { v4 as uuidv4 } from 'uuid';


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
      _id: uuidv4(),
      name:this.name,
      birthDate: new Date(this.birthDate),
      photo: this.photo
    }
    if(this.name!=null && this.birthDate!=null){
      if(this.service.registerPerson(person)){
        alert("Pessoa cadastrada com sucesso!")
      }else{
        alert("Pessoa já cadastrada")
      }
    }else{
      alert("preencha todos os campos")
    }
  }


  ngOnInit(): void {
  }

}
