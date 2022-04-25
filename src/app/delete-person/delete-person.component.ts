import { Component, OnInit, Input, Output, SimpleChanges} from '@angular/core';
import { WebService } from '../service/web.service';
import { Person } from '../model/person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.scss']
})
export class DeletePersonComponent implements OnInit {

  person : Person;

  constructor(private service : WebService, private rota: ActivatedRoute) { }

  deletePerson() {
    let person:Person = this.service.getPerson(this.person._id);
    if(this.service.deletePerson(person)){
      alert("Pessoa excluida com sucesso!");
    }
    else {
      alert("Dados inválidos");
    }
  }

  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
   }
}
