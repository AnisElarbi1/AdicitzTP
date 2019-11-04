import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BookService} from '../services/book.service';


@Component({
  selector: 'adz-confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialogComponent implements OnInit {
  bookPopUp: any;
  confirmButtonText = 'Fermer';


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>, private bookService: BookService) {
    if (data) {

      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;

      }
    }
  }

  ngOnInit() {
    this.bookService.getBookInfo(this.data)
      .subscribe(res => this.bookPopUp = res);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  openBookLink(bookLink: string) {
    window.open(bookLink, '_blank');
  }

}
