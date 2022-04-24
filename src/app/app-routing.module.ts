import { DetailPersonComponent } from './detail-person/detail-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { RegisterPersonComponent } from './register-person/register-person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';


const routes: Routes = [
  { path: "listar", component : ListPeopleComponent},
  { path: "cadastrar", component: RegisterPersonComponent },
  { path: "atualizar/:index", component: UpdatePersonComponent},
  { path: "deletar/:index", component: DeletePersonComponent},
  { path: "detalhar/:index", component: DetailPersonComponent},
  {path: "", redirectTo: "/listar", pathMatch: "full"}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
