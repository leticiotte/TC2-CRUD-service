import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterPersonComponent } from "./register-person/register-person.component";
import { DeletePersonComponent } from "./delete-person/delete-person.component";
import { UpdatePersonComponent } from "./update-person/update-person.component";
import { ListPeopleComponent } from "./list-people/list-people.component";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DetailPersonComponent } from "./detail-person/detail-person.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegisterPersonComponent,
    DeletePersonComponent,
    UpdatePersonComponent,
    ListPeopleComponent,
    DetailPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
