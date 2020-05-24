import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../api.service';
import { Survey } from '../survey';
import { Router } from '@angular/router';
 
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.css']
})
export class SurveyTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'question_1', 'question_2', 'question_3', 'edit_del'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  filter(filterStr: string){
    this.dataSource.filter = filterStr.trim().toLowerCase();
  }

  constructor(private apiService: ApiService, private router: Router,
    private dialog: MatDialog, private snackBar: MatSnackBar ){
    this.apiService.getSurveys().subscribe((surveys: Survey[])=>{
      this.dataSource = new MatTableDataSource(surveys);
    })
  }

  ngOnInit(){
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteSurvey(id: number){
    this.apiService.deleteSurvey(id).subscribe((survey: Survey)=>{
      console.log(id, " deleted");

      this.apiService.getSurveys().subscribe((surveys: Survey[])=>{
        this.dataSource = new MatTableDataSource(surveys);
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });      
    });
  }
  
  editSurvey(id: number){
    this.router.navigate(['survey-edit/' + id]);
  }

  deleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {});

    dialogRef.afterClosed().subscribe((confirmed:boolean) => {
      if(confirmed){
        this.deleteSurvey(id);
      }
      else {
        console.log('not deleted!');
      }
    })

  }

}
