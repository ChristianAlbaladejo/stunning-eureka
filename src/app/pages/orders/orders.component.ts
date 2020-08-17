import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ProductsService]
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private _productsService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    this._productsService.getAllOrders().subscribe(response => {
      this.orders = response
      console.log(this.orders);
    })
  }

}
