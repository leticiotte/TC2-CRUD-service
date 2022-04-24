import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { WebService } from '../service/web.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {

  name:string
  birthDate:string
  photo:string;

  person : Person;

  constructor(private service : WebService, private rota: ActivatedRoute) { }

  updatePerson(){
    const person: Person = {
      _id: this.person._id,
      name:this.name,
      birthDate: new Date(this.birthDate),
      photo: this.photo
    }
    if(this.service.updatePerson(person)){
      alert("Pessoa atualizada com sucesso!!")
    }else{
      alert("Erro")
    }
  }


  ngOnInit(): void {
    let index = parseInt(this.rota.snapshot.paramMap.get("index"));
    this.person = this.service.getPerson(index);
   }


}
