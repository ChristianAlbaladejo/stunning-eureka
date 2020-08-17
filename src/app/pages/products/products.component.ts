import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products = [];
  updateProducts = [];
  constructor(private _productsService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(response => {
      this.products = response
    })
  }

  save() {
    var body = {
      'products': JSON.stringify(this.updateProducts)
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    });
    this.http
      .post('https://panesandco.herokuapp.com/admin/updateProducts/',
        body, { headers: headers })
      .subscribe(data => {
        console.log(data)
      }, error => {
      });
  }

  checked(event: any, p) {
    if (event.currentTarget.checked) {
      this.updateProducts.push(p)
    } else {
      for (let i = 0; i < this.updateProducts.length; i++) {
        if (this.updateProducts[i].id == p.id) {
          this.updateProducts.splice(i, 1)
        }
      }
    }
  }

}
