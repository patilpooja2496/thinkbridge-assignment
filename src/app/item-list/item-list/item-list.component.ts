import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public itemForm: FormGroup;
  itemData: any;
  result: boolean;
  disable: boolean;
  displayedColumns: string[] = ['no', 'name', 'price', 'description', 'delete'];
  constructor(
    private fb: FormBuilder,
    private itemListService: ItemListService, // inject dependancy
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getItemList();
  }
  buildForm(): any {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  get name(): any { return this.itemForm.get('name'); }
  get price(): any { return this.itemForm.get('price'); }
  get description(): any { return this.itemForm.get('description'); }

  // get items from service
  getItemList(): any {
    this.itemData = this.itemListService.getItemList();
  }
  // potst item from service
  submit(): any {
    this.result = this.itemListService.postItem(this.itemForm.value);
    if (this.result) {
      this.snackBar.open('Data saved successfully!', 'close', {
        duration: 2000,
      });
      this.disable = false;
    } else {
      this.snackBar.open('Something went wrong!', 'close', {
        duration: 2000,
      });
    }
    this.itemForm.reset();
    this.getItemList();
  }
}
