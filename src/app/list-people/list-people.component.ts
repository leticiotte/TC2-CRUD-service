import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model/person';


@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  @Input() lista : Person[] = [];

  deletarPessoa(delPessoa:Person) : void{
    const index = this.lista.findIndex(pessoa => pessoa.name === delPessoa.name)
    if (index > -1) {
      this.lista.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
