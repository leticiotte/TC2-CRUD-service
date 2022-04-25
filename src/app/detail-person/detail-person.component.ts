import { Component, OnInit } from '@angular/core';
import { WebService } from '../service/web.service';
import { Person } from '../model/person';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {

  person : Person;

  constructor(
    private service : WebService,
    private rota: ActivatedRoute,
    private local : Location
    ) { }

  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
    if(this.person===null){
      this.voltar();
      alert("Pessoa não encontrada!")
    }
   }

   voltar() : void {
    this.local.back();
  }

}
