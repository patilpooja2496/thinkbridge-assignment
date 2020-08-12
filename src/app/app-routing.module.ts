import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // default route
  {
    path: '',
    redirectTo: 'item',
    pathMatch: 'full',
  },
  // lazy load module
  {
    path: 'item',
    loadChildren: () => import('./item-list/item-list.module').then(m => m.ItemListModule)
  },
  // wildcard route
  {
    path: '**',
    redirectTo: 'item/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
