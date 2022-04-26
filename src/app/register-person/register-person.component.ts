import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Person } from "../model/person";
import { WebService } from "../service/web.service";
import { v4 as uuidv4 } from "uuid";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register-person",
  templateUrl: "./register-person.component.html",
  styleUrls: ["./register-person.component.scss"],
})
export class RegisterPersonComponent implements OnInit {
  formCadastro: FormGroup;
  today: Date = new Date();

  name: string;
  birthDate: string;
  photo: string;
  constructor(private service: WebService) {}

  register() {
    const person: Person = {
      _id: uuidv4(),
      name: this.name,
      birthDate: new Date(Number(this.birthDate.slice(0, 4)), Number(this.birthDate.slice(5, 7)) - 1, Number(this.birthDate.slice(8))),
      photo: this.photo,
    };
    console.log(person.birthDate)
    if (this.formCadastro.valid) {
      if (this.validaData() != null) {
        if (this.service.registerPerson(person)) {
          alert("Pessoa cadastrada com sucesso!");
        } else {
          alert("Pessoa já cadastrada");
        }
      } else {
        alert("Digite uma data válida!");
      }
    } else {
      alert("Preencha todos os campos!");
    }
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

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      birthDate: new FormControl(null, [Validators.required]),
      photo: new FormControl(null),
    });
  }
}
