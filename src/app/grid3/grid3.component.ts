import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from '../grid/localData';
import { ColumnType } from 'igniteui-angular';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.scss'],
})
export class Grid3Component implements OnInit {
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
