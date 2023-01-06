import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductFormPageRoutingModule } from './product-form-routing.module';

import { ProductFormPage } from './product-form.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductFormPageRoutingModule,
    ExploreContainerComponentModule,

  ],
  declarations: [ProductFormPage]
})
export class ProductFormPageModule {
}
