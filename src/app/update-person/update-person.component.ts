import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { WebService } from '../service/web.service';
import { Person } from '../model/person';
import { Location } from "@angular/common";
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {
  birthDate: string
  today: Date = new Date();
  person: Person;
  formCadastro : FormGroup;

  constructor(
    private service : WebService,
    private rota: ActivatedRoute,
    private local : Location
    ) { }

  updatePerson(){
    const person: Person = {
      _id: this.person._id,
      name:this.person.name,
      birthDate: new Date(Number(this.birthDate.slice(0, 4)), Number(this.birthDate.slice(5, 7)) - 1, Number(this.birthDate.slice(8))),
      photo: this.person.photo
    }


    if(this.formCadastro.valid){
      if(this.validaData()!=null){
        if(this.service.updatePerson(person)){
          alert("Pessoa atualizada com sucesso!")
        }else{
          alert("Pessoa não encontrada!")
        }
      }else{
        alert("Data inválida!")
      }
    }else{
      alert("Preencha todos os campos!")
    }

  }


  ngOnInit(): void {
    let index = this.rota.snapshot.paramMap.get("index");
    this.person = this.service.getPerson(index);
    if(this.person!==null){
      this.birthDate = this.person.birthDate.toISOString().split('T')[0]
      this.initForm();
    }
  }

  voltar() : void {
    this.local.back();
  }

  validaData(): Date {
    let dataMov = new Date(this.birthDate);
    dataMov.setHours(0,0,0,0)
    let dataAtual = new Date();
    dataAtual.setHours(0,0,0,0)

    if (dataMov < dataAtual) {
      return dataMov;
    }
    return null;
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      name : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      birthDate : new FormControl(null, [Validators.required]),
      photo : new FormControl(null)
      });
  }

}
