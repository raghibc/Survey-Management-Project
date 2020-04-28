import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface SurveyCategories {
  first_name: string;
  last_name: string;
  dob: string;
  position: string;
  title: string;
}

const ELEMENT_DATA: SurveyCategories[] = [
  {first_name: "John", last_name: "Smith", dob: "11-02-1990", position: "Alumni", title: "John's Survey"},
  {first_name: "Kim", last_name: "Ann", dob: "11-02-1975", position: "Faculty", title: "Kim's Survey"},
  {first_name: "Ben", last_name: "Franklin", dob: "11-02-1997", position: "Student", title: "Ben's Survey"},
  {first_name: "John", last_name: "Smith", dob: "11-02-1990", position: "Alumni", title: "John's Survey"},
  {first_name: "Kim", last_name: "Ann", dob: "11-02-1975", position: "Faculty", title: "Kim's Survey"},
  {first_name: "Ben", last_name: "Franklin", dob: "11-02-1997", position: "Student", title: "Ben's Survey"},
  {first_name: "John", last_name: "Smith", dob: "11-02-1990", position: "Alumni", title: "John's Survey"},
  {first_name: "Kim", last_name: "Ann", dob: "11-02-1975", position: "Faculty", title: "Kim's Survey"},
  {first_name: "Ben", last_name: "Franklin", dob: "11-02-1997", position: "Student", title: "Ben's Survey"},
];

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.css']
})
export class SurveyTableComponent implements OnInit {

  displayedColumns: string[] = ['first_name', 'last_name', 'dob', 'position', 'title'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getData(row){
    console.log(row);
  }

  filter(filterStr: string){
    this.dataSource.filter = filterStr.trim().toLowerCase();
  }

}
