import { Component }  from '@angular/core';

import { Book } from "./book";

@Component({
    selector: "book-list",
    template:`
    <li *ngFor="let book of books" (click)='showBook(book)'>
    {{book.id}}:{{book.bookname}}:{{book.price}}
    </li>
    <div *ngIf="book">
    <show-book [book]="book"></show-book>
    </div>
    `,
}) export class BookComponent{
    books:Book[]=[
        {id:1,bookname:'java',price:91.00},
        {id:2,bookname:'php',price:92.00},
        {id:3,bookname:'c',price:93.00},
    ];
    book:Book;
    showBook(book) :void {
        this.book = book;
    }
}
