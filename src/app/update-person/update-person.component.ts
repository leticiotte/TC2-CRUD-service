import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { WebService } from '../service/web.service';
import { Person } from '../model/person';
import { Location } from "@angular/common";


@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {
  birthDate: string
  person: Person;

  constructor(
    private service : WebService,
    private rota: ActivatedRoute,
    private local : Location
    ) { }

  updatePerson(){
    const person: Person = {
      _id: this.person._id,
      name:this.person.name,
      birthDate: new Date(this.birthDate + "EDT"),
      photo: this.person.photo
    }
    if(this.validaData()!=null){
      if(this.service.updatePerson(person)){
        alert("Pessoa atualizada com sucesso!")
      }else{
        alert("Pessoa não encontrada!")
      }
    }else{
      alert("Data inválida!")
    }
  }


  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
    if(this.person===null){
      this.voltar();
      alert("Pessoa não encontrada!")
    }
    this.birthDate = this.person.birthDate.toISOString().split('T')[0]

  }

   voltar() : void {
    this.local.back();
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


}
