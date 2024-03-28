import { Component, OnInit } from '@angular/core';
import { BookSearchService } from './book-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchQuery = '';
  books: any[] = [];

  constructor(
    private bookSearchService: BookSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSearch();
  }

  loadSearch(){
    const lastSearch = JSON.parse(localStorage.getItem('lastSearch') || '{}');
    this.searchQuery = lastSearch.query || '';
    this.books = lastSearch.results || [];
    this.searchQuery = '';
  }

  showBooks(){
    this.bookSearchService.searchingBooks(this.searchQuery)
      .subscribe(data => {
        this.books = data.items?.slice(0, 12) ?? [];
        this.saveSearch();
      });
  }

  openBook(bookId: string){
    this.router.navigate(['/book-details', bookId]);
  }

  saveSearch(){
    localStorage.setItem('lastSearch', JSON.stringify({ query: this.searchQuery, results: this.books }));
    this.searchQuery = '';
  }

  searchBooks(){
    this.showBooks();
  }
}
