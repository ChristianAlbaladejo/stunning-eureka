import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  public url: string;
  public identify;
  public stats;

  constructor(public _http: HttpClient) {
    this.url = 'https://panesandco.herokuapp.com';
    /* this.url = 'http://localhost:3000';  */
  }

  getFamilies(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',

    });

    return this._http.get(this.url + '/', { headers: headers });
  }

  getProducts(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/products', { headers: headers });
  }

  getProductsById(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/products/' + id, { headers: headers });
  }

  getProductById(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/product/' + id, { headers: headers });
  }

  familyName(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/familiName/' + id, { headers: headers });
  }

  lastOrder(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/lastOrder/', { headers: headers });
  }

  filter(f): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/filter/' + f, { headers: headers });
  }

  filterByName(f, id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
    });

    return this._http.get(this.url + '/filterByName/' + f + '/' + id, { headers: headers });
  }

  getSalesOrders(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/salesorders/' + id, { headers: headers });
  }

  //Admin
  getAllSales(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/sales/all', { headers: headers });
  }

  getChars(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/getchars/' + id, { headers: headers });
  }


  update(order): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': localStorage.getItem("token"),
      'Content-Type': 'application/json; charset=UTF-8'
    });

    return this._http.put(this.url + '/admin/updateOrder/' + order, '', { headers: headers });
  }

  getLimitSales(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/sales/', { headers: headers });
  }

  getFailSales(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/salesFail/', { headers: headers });
  }

  getTotalRevenue(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/totalRevenue/', { headers: headers });
  }

  getTotalUser(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/totalUser/', { headers: headers });
  }

  getTotalSales(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });
    console.log(headers)
    return this._http.get(this.url + '/admin/totalSales/', { headers: headers });
  }

  getUserOrder(id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/returnUser/' + id, { headers: headers });
  }

  getAllOrders(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/getAllOrders/', { headers: headers });
  }

  updateProducts(p): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    let array = JSON.stringify(p)
    let products = {
      'products': array
    }
    console.log(products);
    return this._http.post(this.url + '/admin/updateProducts', { 'products': 'asd' }, { headers: headers });
  }

  getAllOrdersExtended(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': localStorage.getItem("token")
    });

    return this._http.get(this.url + '/admin/getAllOrdersShort/', { headers: headers });
  }
}
