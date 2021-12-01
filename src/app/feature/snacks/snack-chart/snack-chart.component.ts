import { Component, OnInit } from '@angular/core';
import { Snack, TypedSnack } from '../snack';

@Component({
  selector: 'app-snack-chart',
  templateUrl: './snack-chart.component.html',
  styleUrls: ['./snack-chart.component.css']
})
export class SnackChartComponent implements OnInit {

  chartType = "pie";
  chartCategory = "types";

  snacks: Snack[] = [];
  typedSnacks: TypedSnack[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
