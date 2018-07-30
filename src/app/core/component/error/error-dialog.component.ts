import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    msg: string;
    errors: string[];
}

@Component({
    selector: 'app-error-dialog',
    templateUrl: 'error-dialog.component.html',
    styleUrls: ['error-dialog.component.css']
})
export class ErrorDialogComponent {
    constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
