import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {

  private bookArr: any [];
  constructor(private books: BooksService) { }

  ngOnInit() {
    this.books.readBooks().subscribe(data => {
      this.bookArr = data;
      // console.log(this.bookArr);
    });
  }


}
