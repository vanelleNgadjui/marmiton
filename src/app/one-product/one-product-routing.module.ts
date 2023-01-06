import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneProductPage } from './one-product.page';

const routes: Routes = [
  {
    path: '',
    component: OneProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneProductPageRoutingModule {}
