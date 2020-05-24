import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  warning_msg: string = "Are you sure you want to delete this entry?";
  confirm_txt: string = "Yes";
  cancel_txt: string = "No";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  deleteConfirm(): void {
    this.dialogRef.close(true);
  }

}
