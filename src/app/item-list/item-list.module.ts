import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { DeleteItemDetailsComponent } from './delete-item-details/delete-item-details.component';


@NgModule({
  declarations: [ItemListComponent, DeleteItemDetailsComponent],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ItemListModule { }
