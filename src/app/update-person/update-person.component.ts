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
  birthDateFormatted: string
  person: Person;
    
  constructor(private service : WebService, private rota: ActivatedRoute) { }

  updatePerson(){
    const person: Person = {
      _id: this.person._id,
      name:this.person.name,
      birthDate: new Date(this.birthDateFormatted + "EDT"),
      photo: this.person.photo
    }
    if(this.service.updatePerson(person)){
      alert("Pessoa atualizada com sucesso!!")
    }else{
      alert("Erro")
    }
  }


  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
    this.birthDateFormatted = this.person.birthDate.toISOString().split('T')[0]

   }


}
