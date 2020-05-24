import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../api.service';
import { Member } from '../member';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css']
})
export class MemberTableComponent implements AfterViewInit {
 
  displayedColumns: string[] = ['firstName', 'lastName', 'dob', 'position', 'email', 'phone', 'edit_del'];
  dataSource = new MatTableDataSource(); 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  filter(filterStr: string){
    this.dataSource.filter = filterStr.trim().toLowerCase();
  }

  constructor(private apiService: ApiService, private router: Router, 
    private dialog: MatDialog, private snackBar: MatSnackBar ){
    this.apiService.getMembers().subscribe((members: Member[])=>{
      this.dataSource = new MatTableDataSource(members);
    })
  }
  
  ngOnInit(): void { 
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteMember(id: number){
    this.apiService.deleteMember(id).subscribe((member: Member)=>{
      console.log(id, " deleted");

      this.apiService.getMembers().subscribe((members: Member[])=>{
        this.dataSource = new MatTableDataSource(members);
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

    });
  }

  editMember(id: number){
    this.router.navigate(['member-edit/' + id]); 
  }

  deleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {});

    dialogRef.afterClosed().subscribe((confirmed:boolean) => {
      if(confirmed){
        this.deleteMember(id);
      }
      else {
        console.log('not deleted!');
      }
    })

  }
  


    
}
