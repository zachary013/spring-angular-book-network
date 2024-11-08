import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../../services/services/book.service';
import {Router} from '@angular/router';
import {PageResponseBookResponse} from '../../../../services/models/page-response-book-response';
import {BookCardComponent} from '../../components/book-card/book-card.component';
import {NgForOf, NgIf} from '@angular/common';
import {BookResponse} from '../../../../services/models/book-response';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
  page: number = 0;
  size: number = 5;
  message: string = '';
  level:string = 'success';

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.bookService.findAllBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books: PageResponseBookResponse) => {
        this.bookResponse = books;
      }
    })
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBooks();
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
    this.findAllBooks();
  }

  get isLastPage(): boolean {
    return this.page == this.bookResponse.totalPages as number - 1;
  }

  borrowBook(book: BookResponse) {
    this.message = '';
    this.bookService.borrowBook({
      'book-id': book.id as number,
    }).subscribe({
      next: ():void => {
        this.level = 'success';
        this.message = 'Book successfully added to your list';
      },
      error: (err):void => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    })
  }
}
