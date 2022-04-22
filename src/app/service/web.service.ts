import { Person } from './../model/person';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://banco-dados-teste.glitch.me/api";

  getPeople() : Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL + "/people");
  }

  getPerson(id) : Observable<Person> {
    return this.http.get<Person>(this.baseURL + "/people/" + id);
  }

  registerPerson(person) : Observable<any>{
    let body = new HttpParams();
    body = body.set("id", person.id);
    body = body.set("name", String(person.name));
    body = body.set("birthDate", person.birthDate);
    body = body.set("photo", person.photo);
    return this.http.post(this.baseURL + "/people", body, {observe: "response"});
  }

  deletePerson(person): Observable<any>{
    return this.http.delete(this.baseURL + "/people/" + person._id, {observe: "response"});
  }

  updatePerson(person) : Observable<any>{
    let body = new HttpParams();
    body = body.set("id", person.id);
    body = body.set("name", String(person.name));
    body = body.set("birthDate", person.birthDate);
    body = body.set("photo", person.photo);
    return this.http.put(this.baseURL + "/people/" + person._id, body, {observe: "response"});
  }

  constructor(private http : HttpClient) { }
}
