import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent }      from './kids/kids.component';
import { KidDetailComponent }  from './kid-detail/kid-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: KidDetailComponent },
  { path: 'kids', component: KidsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}