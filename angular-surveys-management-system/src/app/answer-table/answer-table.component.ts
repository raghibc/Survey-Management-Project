import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Answer } from '../answer';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-answer-table',
  templateUrl: './answer-table.component.html',
  styleUrls: ['./answer-table.component.css']
})
export class AnswerTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'title', 'answer_1', 'answer_2', 'answer_3', 'edit_del'];
  dataSource = new MatTableDataSource(); 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  filter(filterStr: string){
    this.dataSource.filter = filterStr.trim().toLowerCase();
  }

  constructor(private apiService: ApiService, private router: Router, 
    private dialog: MatDialog, private snackBar: MatSnackBar ){
    this.apiService.getAnswers().subscribe((answers: Answer[])=>{
      console.log(answers);
      this.dataSource = new MatTableDataSource(answers);
    })
  }

  ngOnInit(): void { 
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteAnswers(id: number){
    this.apiService.deleteAnswers(id).subscribe((answers: Answer)=>{
      console.log(id, " deleted");

      this.apiService.getAnswers().subscribe((answers: Answer[])=>{
        this.dataSource = new MatTableDataSource(answers);
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

    });
  }

  editAnswers(id: number){
    this.router.navigate(['answer-edit/' + id]); 
  }

  deleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {});

    dialogRef.afterClosed().subscribe((confirmed:boolean) => {
      if(confirmed){
        this.deleteAnswers(id);
      }
      else {
        console.log('not deleted!');
      }
    })

  }
  


}
