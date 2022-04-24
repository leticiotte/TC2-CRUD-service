import { Person } from './../model/person';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  id: number = 0;
  private peopleList: Person[]=[

  ];

  constructor(){}

  getPeople(){
    return this.peopleList;
  }

  getPerson(id: number){
    return this.peopleList[id];
  }

  private exists(person : Person) {
    for(let p of this.peopleList) {
      if(p._id == person._id) {
        return true;
      }
    }
    return false;
  }

  registerPerson(person : Person) {
    person._id = this.id;
    if(!this.exists(person)) {
      this.peopleList.push(person);
      this.id++;
      return true;
    }
    return false;
  }

  deletePerson(person:Person){
    if(this.exists(person)) {
      this.peopleList.splice(person._id,1);
      return true;
    }
    return false;
  }

  updatePerson(person: Person){
    if(this.exists(person)) {
      this.peopleList.splice(person._id, 1, person);
      return true;
    }
    return false;
  }



}
