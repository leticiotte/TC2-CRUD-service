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
  birthDateFormatted: string
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
      birthDate: new Date(this.birthDateFormatted + "EDT"),
      photo: this.person.photo
    }
    if(this.service.updatePerson(person)){
      alert("Pessoa atualizada com sucesso!")
    }else{
      alert("Pessoa não encontrada!")
    }
  }


  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
    if(this.person===null){
      this.voltar();
      alert("Pessoa não encontrada!")
    }
    this.birthDateFormatted = this.person.birthDate.toISOString().split('T')[0]

  }

   voltar() : void {
    this.local.back();
  }


}
