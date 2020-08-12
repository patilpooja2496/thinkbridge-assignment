import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { DeleteItemDetailsComponent } from './delete-item-details/delete-item-details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ItemListComponent
  },
  {
    path: 'delete-item-details/:item_id',
    component: DeleteItemDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListRoutingModule { }
