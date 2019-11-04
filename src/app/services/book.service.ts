import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }


  searchBook(bookName: string, startIndex: number, maxResult: number) {
    return this.httpClient.get<any>(environment.base_url + 'books/v1/volumes?q=' + bookName
      + '&startIndex=' + startIndex + '&maxResults=' + maxResult);
  }

  getBooksResultWithCriteria(criteria: string, value: any, bookName: string, startIndex: number, maxResult: number) {
    return this.httpClient.get<any>(environment.base_url + 'books/v1/volumes?q=' + bookName + '+intitle:'
      + bookName + '+' + criteria + ':' + value + '&startIndex=' + startIndex + '&maxResults=' + maxResult);
  }

  getBookInfo(bookUrl: string) {
    return this.httpClient.get(bookUrl);

  }


}
