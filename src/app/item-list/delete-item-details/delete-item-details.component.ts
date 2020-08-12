import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-item-details',
  templateUrl: './delete-item-details.component.html',
  styleUrls: ['./delete-item-details.component.css']
})
export class DeleteItemDetailsComponent implements OnInit {

  itemDetails: any;
  result: any;

  itemData: any;
  constructor(
    private itemListService: ItemListService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getItemDetails();
  }
  // get item details
  getItemDetails(): any {
    this.itemDetails = this.itemListService.getItemDetails(this.activatedRoute.snapshot.params['item_id']);
  }
  // delete item from service
  delete(): any {
    this.result = this.itemListService.deleteItem(this.activatedRoute.snapshot.params['item_id']);
    if (this.result) {
      this.snackBar.open('Data deleted successfully!', 'close', {
        duration: 2000,
      });
    } else {
      this.snackBar.open('Something went wrong!', 'close', {
        duration: 2000,
      });
    }
    this.router.navigate(['/item/list']);
  }
}
