import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
//   {
//   //   path:'/users' ,pathMatch:'full', redirectTo :'/api/users'
//   // path: '' , component:UserComponent
// },{
// path:'test', component: UserComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
