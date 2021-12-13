import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteTestComponent } from './route-test/route-test.component';

const routes: Routes = [
  { path: 'item/:id', component: RouteTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
