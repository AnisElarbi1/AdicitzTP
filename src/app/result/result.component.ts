import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../services/book.service';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../Modal/confirmation-dialog.component';
import {timeout} from 'rxjs/operators';



@Component({
  selector: 'adz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  bookName: string;
  selectedFilter: string;
  filterValue: string;
  startIndex = 0;
  totalItems: number;
  criterias: Array<string> = [];
  books: Array<any> = [];


  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService, private dialog: MatDialog
           ) {
  }

  ngOnInit() {
    this.criterias.push('inauthor', 'inpublisher', 'subject', 'isbn', 'lccn', 'oclc');
    this.bookName = this.route.snapshot.paramMap.get('bookName');
    this.getBooksOnInit(0);
  }

  nextPage() {
    this.startIndex += 10;

    if (this.filterValue === undefined) {
      this.getBooksOnInit(this.startIndex);
    } else {
      this.getBooksWithCriteria(this.startIndex);
    }
    window.scroll(0, 0);
  }

  previousPage() {
    this.startIndex -= 10;
    if (this.filterValue === undefined) {
      this.getBooksOnInit(this.startIndex);
    } else {
      this.getBooksWithCriteria(this.startIndex);
    }
    window.scroll(0, 0);
  }


  searchWithSelectedCriteria(value) {
    this.getBooksWithCriteria(0);
  }

  getBooksOnInit(startIndex: number) {
    this.bookService.searchBook(this.bookName, startIndex, 10).subscribe(data => {

      this.books = data.items;
      this.totalItems = data.totalItems;
      this.clearBooksArray();
      this.books = data.items;
    }, error => console.log(error.error.message));
  }


  getBooksWithCriteria(startIndex: number) {
    this.bookService.getBooksResultWithCriteria(this.selectedFilter, this.filterValue, this.bookName, startIndex, 10).subscribe(data => {
      console.log(data);
      this.totalItems = data.totalItems;
      this.clearBooksArray();
      this.books = data.items;
    }, error => console.log(error.error.message));
  }


  clearBooksArray() {
    this.books = [];
  }


  showNextButton() {
    if ((this.startIndex === 0 && this.totalItems > 10) ||
      (this.startIndex !== 0 && this.startIndex < this.totalItems && this.books.length === 10)) {
      return true;
    }
  }


  showPreviousButton(): boolean {
    if ((this.startIndex !== 0 && this.startIndex < this.totalItems && this.books.length === 10) || (this.startIndex !== 0)) {
      return true;
    }
  }

  returnToSearchPage() {
    this.router.navigate(['search']);
  }


  showBookDetails(bookUrl: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: bookUrl,
      height: '270px',
      width: '400px',
    });
  }


  haveThumbNail(volumeInfo: any) {
    return volumeInfo.hasOwnProperty('imageLinks');
  }

}
