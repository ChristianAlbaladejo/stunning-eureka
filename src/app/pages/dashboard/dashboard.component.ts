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
  public sales= [];
  public totalSales;
  public failSales;
  public totalRevenue;
  public totalUser;


  constructor(private _productsService: ProductsService) { }

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

  load(){
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
        this.failSales = response;
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







  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
