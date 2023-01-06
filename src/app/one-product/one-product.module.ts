import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneProductPageRoutingModule } from './one-product-routing.module';

import { OneProductPage } from './one-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneProductPageRoutingModule
  ],
  declarations: [OneProductPage]
})
export class OneProductPageModule {



}
