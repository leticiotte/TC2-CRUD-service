import { Component, OnInit, Input, Output } from '@angular/core';
import { Person } from '../model/person';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  peopleList : Person[] = [
    {
        _id: 0,
        name: "Juan",
        birthDate: new Date("2002-03-14T00:00:00.000Z"),
        photo: undefined
    }
];

  personSelected: Person = null;
  personToUpdate: Person = null;

  constructor(private service : WebService) { }

  getPeople() {
    this.peopleList = this.service.getPeople();
    console.log(this.peopleList);
  }

  selecionar(person: Person){
    this.personSelected=person;
    console.log(this.personSelected);
  }

  ngOnInit(): void {
    this.getPeople();
  }


}
