import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookSearchService } from '../book-search/book-search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  books: any[] = [];

  constructor(private bookSearchService: BookSearchService, private router:Router) {}

  ngOnInit(): void {
  }


}
