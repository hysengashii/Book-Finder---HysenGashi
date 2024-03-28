import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  searchingBooks(query: string = ''): Observable<any> {
    const defaultQuery = 'javacript';
    const apiUrl = query.trim() !== '' ?
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=32&fields=items(id,volumeInfo(title,authors,description,imageLinks))` :
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(defaultQuery)}&maxResults=30&fields=items(id,volumeInfo(title,authors,description,imageLinks))`;
    return this.http.get(apiUrl);
  }

  detailsBook(bookId: string): Observable<any> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  }
}
