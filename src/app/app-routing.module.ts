import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { RouteTestComponent } from './route-test/route-test.component';

const routes: Routes = [
  { path: 'item/:id', component: RouteTestComponent },
  { path: 'all', component: PeopleComponent },
  { path: 'person/add', component: AddPersonComponent },
  { path: 'person/:id', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
