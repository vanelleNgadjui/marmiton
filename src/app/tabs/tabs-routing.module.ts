import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'product-form',
        loadChildren: () => import('../product-form/product-form.module').then(m => m.ProductFormPageModule)
      },
       {
        path: 'category-form',
        loadChildren: () => import('../category-form/category-form.module').then(m => m.CategoryFormPageModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('../product-list/product-list.module').then(m => m.ProductListPageModule)
      },
      {
        path: 'category-list',
        loadChildren: () => import('../category-list/category-list.module').then(m => m.CategoryListPageModule)
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
