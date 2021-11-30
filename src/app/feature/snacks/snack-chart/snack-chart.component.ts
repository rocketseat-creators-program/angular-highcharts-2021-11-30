import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';

import { SnackService } from '../snack.service';

import { TypedSnack, Snack } from '../snack';
import { toTypedSnacks } from '../snack.utils';

@Component({
  selector: 'app-snack-chart',
  templateUrl: './snack-chart.component.html',
  styleUrls: ['./snack-chart.component.css']
})
export class SnackChartComponent implements OnInit {

  chart!: Chart;
  chartType = "pie";
  chartCategory = "types";

  snacks: Snack[] = [];
  typedSnacks: TypedSnack[] = [];

  constructor(
    private snackService: SnackService
  ) { }

  ngOnInit(): void {
    this.snackService.findAll().subscribe(response => {
      this.snacks = response;
      this.typedSnacks = toTypedSnacks(response);
      this.loadChart();
    })
  }

  loadChart() {
    const defaultChartOptions = {
      chart: {
        type: this.chartType
      },
      title: {
        text: "Snacks Chart"
      },
      credits: {
        enabled: false
      }
    }

    const customChartOptions = this.customChartOptions();

    this.chart = new Chart({
      ...defaultChartOptions,
      ...customChartOptions
    });
  }

  private pieChartOptions(): Highcharts.Options {
    return {
      tooltip: {
        pointFormat: 'Total: <b>{point.percentage:.1f}%</b>',
        headerFormat: '<span style="font-size:15px">{point.key}</span><br/>'
      },
      plotOptions: {
        pie: {
          cursor: 'pointer',
          showInLegend: true,
          allowPointSelect: true,
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [{
        type: "pie",
        colorByPoint: true,
        data: this.typedSnacks.map(typedSnack => {
          return {
            name: typedSnack.type,
            y: typedSnack.snacks.length
          }
        })
      }]
    }
  }

  private columnChartOptions(): Highcharts.Options {
    const seriesTypes: SeriesOptionsType = {
      type: "column",
      tooltip: {
        pointFormat: '<span style="font-size:14px">Total</span>: <b>{point.y}</b>'
      },
      data: this.typedSnacks.map(typedSnack => {
        return {
          name: typedSnack.type,
          y: typedSnack.snacks.length
        }
      })
    }

    const seriesPrices: SeriesOptionsType = {
      type: "bar",
      tooltip: {
        valueDecimals: 2,
        valuePrefix: 'R$ ',
        pointFormat: '<span style="font-size:14px">Price</span>: <b>{point.y}</b>'
      },
      data: this.snacks.map(snack => {
        return {
          name: snack.name,
          y: snack.price
        }
      })
    }

    return {
      yAxis: {
        title: {
          text: this.chartCategory == 'types' ? "Total" : "Prices"
        }
      },
      xAxis: {
        type: 'category',
        title: {
          text: this.chartCategory == 'types' ? "Types" : "Snacks"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:15px">{point.key}</span><br/>'
      },
      series: [{
        colorByPoint: true,
        showInLegend: false,
        ...this.chartCategory == 'types' ? seriesTypes : seriesPrices
      }]

    }
  }

  private customChartOptions() {
    switch (this.chartType) {
      case "pie":
        return this.pieChartOptions();
      default:
        return this.columnChartOptions();
    }
  }

}
