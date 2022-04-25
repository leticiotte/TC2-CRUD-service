import { Component, OnInit } from '@angular/core';
import { WebService } from '../service/web.service';
import { Person } from '../model/person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {

  person : Person;

  constructor(private service : WebService, private rota: ActivatedRoute) { }

  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
   }

}
