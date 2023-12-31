import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEmpleadosPage } from './menu-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEmpleadosPageRoutingModule {}
