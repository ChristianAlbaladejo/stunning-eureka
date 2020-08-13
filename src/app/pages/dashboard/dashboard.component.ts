import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProductsService } from '../../../app/services/products.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProductsService],
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public sales = [];
  public totalSales;
  public failSales = [];
  public totalRevenue;
  public totalUser;
  public viewMore: boolean = true;
  public lastOrderId: any;
  public orderUser: any


  constructor(private _productsService: ProductsService, private http: HttpClient) { }

  ngOnInit() {
    this.load()
    this.datasets = [
      [0, 20, 10, 60, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }

  load() {
    this.viewMore = true;
    this.sales = [];
    this._productsService.getLimitSales().subscribe(
      (response) => {
        response.forEach(element => {
          return this.sales.push(element);
        });
        for (let i = 0; i < this.sales.length; i++) {
          this.sales[i].orderLines = this.sales[i].orderLines.replace(/'/g, '"');
          this.sales[i].orderLines = JSON.parse(this.sales[i].orderLines);
        }
        console.log(this.sales)

      },
      (error) => {

      }
    );
    this._productsService.getFailSales().subscribe(
      (response) => {
        response.forEach(element => {
          return this.failSales.push(element);
        });
        for (let i = 0; i < this.failSales.length; i++) {
          this.failSales[i].orderLines = this.failSales[i].orderLines.replace(/'/g, '"');
          this.failSales[i].orderLines = JSON.parse(this.failSales[i].orderLines);
        }
        console.log(this.failSales)
      },
      (error) => {
      }
    );
    this._productsService.getTotalRevenue().subscribe(
      (response) => {
        this.totalRevenue = response[0]["SUM(grossAmount)"];
      },
      (error) => {

      }
    );
    this._productsService.getTotalUser().subscribe(
      (response) => {
        this.totalUser = response[0]["COUNT(*)"];
      },
      (error) => {

      }
    );
    this._productsService.getTotalSales().subscribe(
      (response) => {
        this.totalSales = response[0]["COUNT(*)"];
      },
      (error) => {

      }
    );
  }


  loadAll() {
    this.viewMore = false;
    this.sales = [];
    this._productsService.getAllSales().subscribe(
      (response) => {
        response.forEach(element => {
          return this.sales.push(element);
        });
        for (let i = 0; i < this.sales.length; i++) {
          this.sales[i].orderLines = this.sales[i].orderLines.replace(/'/g, '"');
          this.sales[i].orderLines = JSON.parse(this.sales[i].orderLines);
        }
        console.log(this.sales)

      },
      (error) => {

      }
    );
  }

  reload(o) {
    console.log(o);
    //TO DO
    //ENVIAR DATOS AL TPV
    //ticket
    //ACTUALIZAR SI SE GUARDAN LOS DATOS
    console.log('ORDER');
    this.lastOrder();
    console.log('USUARIO');
    this.user(o.userId);
    setTimeout(() => {
      this.testRequest(o);
    }, 2000);
  }

  async testRequest(order) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/xml; charset=utf-8',
      'Api-Token': 'Blade001$',
      'Accept': 'application/xml'
    });
    let lines = '';
    for (let i = 0; i < order.orderLines.length; i++) {
      let date = Date.now();
      var dt = new Date(date);
      var lastIndex = i;
      lines += "<Line Index=" + '"' + i + '"' + " CreationDate = " + '"' + dt.toISOString() + '"' + " Type = " + '"' + 'Standard' + '"' + " ParentIndex =" + '"' + '"' + " ProductId = " + '"' + order.orderLines[i].id + '"' + " ProductName = " + '"' + order.orderLines[i].name + '"' + " SaleFormatId = " + '"' + order.orderLines[i].id + '"' + " SaleFormatName = " + '"' + order.orderLines[i].name + '"' + " SaleFormatRatio = " + '"' + '1.00' + '"' + " MainBarcode = " + '"' + '"' + " ProductPrice = " + '"' + order.orderLines[i].costPrice + '"' + " VatId = " + '"' + '3' + '"' + " VatRate = " + '"' + '0.10' + '"' + " SurchargeRate = " + '"' + '0.014' + '"' + " ProductCostPrice = " + '"' + '"' + " MenuGroup = " + '"' + '"' + " PreparationTypeId = " + '"' + '2' + '"' + " PreparationTypeName = " + '"' + 'Cocina' + '"' + " PLU =" + '"' + '"' + " FamilyId = " + '"' + order.orderLines[i].familyId + '"' + " FamilyName = " + '"' + order.orderLines[i].familyName + '"' + " PreparationOrderId = " + '"' + '4' + '"' + "  PreparationOrderName = " + '"' + 'Postres' + '"' + " Quantity = " + '"' + order.orderLines[i].quantity + '"' + " UnitCostPrice =" + '"' + '"' + " TotalCostPrice = " + '"' + '"' + " UserId = " + '"' + '4' + '"' + " UnitPrice = " + '"' + order.orderLines[i].costPrice + '"' + " DiscountRate = " + '"' + '0.00' + '"' + " CashDiscount = " + '"' + '0.00' + '"' + " OfferId =" + '"' + '"' + "  OfferCode = " + '"' + '"' + " TotalAmount = " + '"' + order.orderLines[i].costPrice + '"' + "> <Notes><![CDATA[" + order.orderLines[i].notes + "]]></Notes> </Line> "
    }

    if (order.grossAmount >= 30) {
      lines += "<Line Index=" + '"' + lastIndex + 1 + '"' + " CreationDate = " + '"' + dt.toISOString() + '"' + " Type = " + '"' + 'Standard' + '"' + " ParentIndex =" + '"' + '"' + " ProductId = " + '"' + 1217 + '"' + " ProductName = " + '"' + 'portes' + '"' + " SaleFormatId = " + '"' + 1217 + '"' + " SaleFormatName = " + '"' + 'portes' + '"' + " SaleFormatRatio = " + '"' + '1.00' + '"' + " MainBarcode = " + '"' + '"' + " ProductPrice = " + '"' + 5 + '"' + " VatId = " + '"' + '3' + '"' + " VatRate = " + '"' + '0.10' + '"' + " SurchargeRate = " + '"' + '0.014' + '"' + " ProductCostPrice = " + '"' + '"' + " MenuGroup = " + '"' + '"' + " PreparationTypeId = " + '"' + '2' + '"' + " PreparationTypeName = " + '"' + 'Cocina' + '"' + " PLU =" + '"' + '"' + " FamilyId = " + '"' + 11 + '"' + " FamilyName = " + '"' + 'HALLOWEN' + '"' + " PreparationOrderId = " + '"' + '4' + '"' + "  PreparationOrderName = " + '"' + 'Postres' + '"' + " Quantity = " + '"' + 1 + '"' + " UnitCostPrice =" + '"' + '"' + " TotalCostPrice = " + '"' + '"' + " UserId = " + '"' + '4' + '"' + " UnitPrice = " + '"' + 5 + '"' + " DiscountRate = " + '"' + '0.00' + '"' + " CashDiscount = " + '"' + '0.00' + '"' + " OfferId =" + '"' + '"' + "  OfferCode = " + '"' + '"' + " TotalAmount = " + '"' + 5 + '"' + "> <Notes><![CDATA[]]></Notes> </Line> "
    }
    var deliveryDate = new Date(order.deliverydate);
    var body = '<?xml version="1.0" encoding = "utf-8" standalone = "yes" ?>' + '<Export>'
      + '<SalesOrders>'
      + '<SalesOrder Serie="AW" Number = ' + '"' + parseInt(order.id) + '"' + ' DeliveryDate = "' + deliveryDate.toISOString() + '" Status = "Pending" BusinessDay = "2020-07-07" Guests = "" Date = "2020-07-07T17:59:55" VatIncluded = "true" >'
      + '<Customer Id="1" FiscalName = "' + this.orderUser[0].name + ' ' + this.orderUser[0].lastname + '" Cif = "' + this.orderUser[0].CIF + '" Street = "" City = "" Region = "" ZipCode = "" ApplySurcharge = "false" AccountCode = "" />' +
      '<DeliveryAddress Street="' + this.orderUser[0].calle + '" City = "Murcia" Region = "' + this.orderUser[0].poblacion + '" ZipCode = "' + this.orderUser[0].CP + '" />' +
      '<Pos Id="1" Name = "TPV" />' +
      '<Workplace Id="1" Name = "TALLER DE SABORES Y PANES, SL" />' +
      '<User Id="4" Name = "TOÑI" />' +
      '<SaleCenter Id="1" Name = "Barra" Location = "B1" />' +
      '<Notes><![CDATA[' + order.orderNotes + ']]></Notes>' +
      '<SuggestedTip Percentage="0.00" VatId = "0" VatRate = "0.00" SurchargeRate = "0.00" ApplyToVatIncluded = "true" IgnoreTicketDiscounts = "false" />' +
      '<ServiceCharge Rate="0.00" VatId = "0" VatRate = "0.00" SurchargeRate = "0.00" ApplyToVatIncluded = "true" IgnoreTicketDiscounts = "false" GrossAmount = "0.00" NetAmount = "0.00" VatAmount = "0.00" SurchargeAmount = "0.00" />' +
      '<Lines>' +
      lines +
      '</Lines>' +
      '<Discounts DiscountRate = "0.000" CashDiscount = "0.00" />' +
      '<Payments />' +
      '<Offers />' +
      '<Totals GrossAmount="' + order.grossAmount + '" NetAmount = "' + order.grossAmount + '" VatAmount = "1.09" SurchargeAmount = "0.00" >' +
      '<Taxes>' +
      '<Tax VatRate="0.10" SurchargeRate = "0.014" GrossAmount = "11.94" NetAmount = "10.85" VatAmount = "1.09" SurchargeAmount = "0.00" />' +
      '</Taxes>' +
      '</Totals>' +
      '</SalesOrder>' +
      '</SalesOrders>' +
      '</Export>'
    console.log(body);
    this.http
      .post('http://localhost:8984/api/import/',
        body, { headers: headers })
      .subscribe(data => {
        //update order
        this._productsService.update(order.id).subscribe(
          (response) => {
            this._productsService.getFailSales().subscribe(
              (response) => {
                this.failSales = [];
                response.forEach(element => {
                  return this.failSales.push(element);
                });
                for (let i = 0; i < this.failSales.length; i++) {
                  this.failSales[i].orderLines = this.failSales[i].orderLines.replace(/'/g, '"');
                  this.failSales[i].orderLines = JSON.parse(this.failSales[i].orderLines);
                }
                console.log(this.failSales);
              });
            headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'api-token': 'Blade001$'
            });
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth() + 1) + "/"
              + currentdate.getFullYear() + " @ "
              + currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();
            if (order.chargesType == null) {
              order.chargesType = '';
            }
            var text = {
              "PrinterName": "IMPRESORA",
              "Format": "plain",
              "Data": '\n\nSE HA GENERADO UN NUEVO PEDIDO AW-' + parseInt(order.id) + '\n FECHA DE PEDIDO:' + datetime + ' \n\nCLIENTE:    ' + this.orderUser[0].name.toUpperCase() + ' ' + this.orderUser[0].lastname.toUpperCase() + '\n CALLE:     ' + this.orderUser[0].calle.toUpperCase() + '\n CIUDAD: ' + '   Murcia' + '\n POBLACION: ' + this.orderUser[0].poblacion.toUpperCase() + '\n CP :       ' + this.orderUser[0].CP + '\n CONTACTO : ' + this.orderUser[0].telefono + ' ' + this.orderUser[0].email + '\n  TOTAL:    ' + order.grossAmount + 'euros\n RECOGIDA/ENTREGA: ' + deliveryDate.toISOString().replace(/T/g, ' ') + '\n\n Forma de Pago: ' + order.chargesType.toUpperCase() + '\n\n\n\n\n\n\n\n\n\n\n'
            };
            this.http
              .post('http://localhost:8984/api/print/',
                text, { headers: headers })
              .subscribe(data => {
                localStorage.removeItem('cart');
                localStorage.setItem('cart', JSON.stringify({}));
              });
          }
        )
      });
  }

  async lastOrder() {
    await this._productsService.lastOrder().subscribe(
      (response) => {
        this.lastOrderId = response[0]['MAX(id)'];
        if (this.lastOrderId == 'undefined' || this.lastOrderId == 'null') {
          this.lastOrderId = 1
        }
      },
      (error) => {
      }
    );
  }

  async user(id) {
    console.log(id)
    await this._productsService.getUserOrder(id).subscribe(
      (response) => {
        this.orderUser = response;
        console.log(response)
      },
      (error) => {
      }
    );
  }



  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
