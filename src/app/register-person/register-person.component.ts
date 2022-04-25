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

  today: Date = new Date();

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
      if(this.validaData()!=null){
        if(this.service.registerPerson(person)){
          alert("Pessoa cadastrada com sucesso!")
        }else{
          alert("Pessoa já cadastrada")
        }
      } else{
        alert("Digite uma data válida!")
      }
    }else{
      alert("Preencha todos os campos")
    }
  }

  validaData(): Date{
    let dataMov = new Date(this.birthDate)
    let dataAtual = new Date();

    let m1 = dataAtual.getMonth()+1;
    let a1 = dataAtual.getFullYear();
    let d1 = dataAtual.getDate();

    let m2= dataMov.getMonth()+1;
    let a2 = dataMov.getFullYear();
    let d2 = dataMov.getDate()+1;

    if(a2<=a1 && m2<=m1 && d2<=d1){
      return dataMov;
    }
    return null;
  }

  ngOnInit(): void {
  }

}
