import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookSearchService } from 'src/app/book-search/book-search.service';
import { Location } from '@angular/common'; // Import Location service

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId!: string;
  book: any;

  constructor(private route: ActivatedRoute, private bookService: BookSearchService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id')!;
      this.loadBookDetails();
    });
  }

  loadBookDetails(){
    this.bookService.detailsBook(this.bookId)
      .subscribe(
        (data: any) => this.book = data
      );
  }

  goBack(){
    this.location.back();
  }
}
