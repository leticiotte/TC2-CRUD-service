import { Person } from './../model/person';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  id: number = 0;
  private peopleList: Person[]=[];

  constructor(){}

  getPeople(){
    return this.peopleList;
  }

  getPerson(id: string){
    console.log(id)
    for(const person of this.peopleList){
      if(person._id == id) return person
    }
    return null
  }

  private exists(person : Person) {
    for(let i = 0; i < this.peopleList.length; i++){
      if(this.peopleList[i]._id == person._id) {
        return i;
      }
    }
    return -1;
  }


  registerPerson(person : Person) {
    if(this.getPerson(person._id) == null) {
      this.peopleList.push(person);
      return true;
    }
    return false;
  }

  deletePerson(person:Person){
    const i = this.exists(person)
    console.log(i)
    if(i >= 0) {
      this.peopleList.splice(i, 1);
      return true;
    }
    return false;
  }

  updatePerson(person: Person){
    const i = this.exists(person)
    console.log(person)
    if(i >= 0) {
      this.peopleList.splice(i, 1, person);
      return true;
    }
    return false;
  }

}
