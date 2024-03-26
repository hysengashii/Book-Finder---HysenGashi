
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookSearchService } from '../../book-search.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId!: string;
  book: any;

  constructor(private route: ActivatedRoute, private bookService: BookSearchService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.bookId = id;
        this.loadBookDetails(this.bookId);
      }
    });
  }

  loadBookDetails(bookId: string): void {
    this.bookService.getBookDetails(bookId)
      .subscribe(
        (data: any) => {
          this.book = data;
          console.log(this.book); // Log the book object to inspect its structure
        },
        (error: any) => {
          console.error('Error fetching book details:', error);
        }
      );
  }
}
