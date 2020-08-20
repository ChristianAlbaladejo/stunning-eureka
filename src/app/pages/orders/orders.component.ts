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
  orders = [];

  constructor(private _productsService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    this._productsService.getAllOrders().subscribe(response => {

      response.forEach(element => {
        return this.orders.push(element);
      });

      for (let i = 0; i < this.orders.length; i++) {
        this.orders[i].orderLines = this.orders[i].orderLines.replace(/'/g, '"');
        this.orders[i].orderLines = JSON.parse(this.orders[i].orderLines);
      }
      console.log(this.orders);
    })
  }

}
