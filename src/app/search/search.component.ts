import {Component, OnInit} from '@angular/core';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'adz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  bookName: string;

  constructor(private router: Router) {
  }

  ngOnInit() {


  }
  redirectToResult() {
    this.router.navigate(['result', this.bookName]);
  }

}
