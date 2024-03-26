import { Component, OnInit } from '@angular/core';
import { BookSearchService } from './book-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchQuery: string = '';
  books: any[] = [];

  constructor(private bookSearchService: BookSearchService, private router:Router) {}

  ngOnInit(): void {
    this.loadDefaultBooks();
  }

  loadDefaultBooks(): void {
    this.bookSearchService.searchBooks('') // Passing an empty string to searchBooks to get default books
      .subscribe(
        data => {
          this.books = data.items ? data.items.slice(0, 6) : []; // Load the first 10 books
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
  }
  openBook(bookId: string): void {
    this.router.navigate(['/book-details', bookId]);
  }

  searchBooks(): void {
    if (this.searchQuery.trim() !== '') {
      this.bookSearchService.searchBooks(this.searchQuery)
        .subscribe(data => {
          this.books = data.items ? data.items : [];
        });
    }
  }
}
