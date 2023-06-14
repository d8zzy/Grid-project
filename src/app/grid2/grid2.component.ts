import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from '../grid/localData';
import { ColumnType } from 'igniteui-angular';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss'],
})
export class Grid2Component implements OnInit {
  public localData: Employee[] = [];
  title = 'grid';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date) => date.toLocaleDateString();
    }
  }
}
