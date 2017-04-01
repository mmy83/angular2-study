import { Component }  from '@angular/core';

import { Book } from "./book";

@Component({
    selector: "book-list",
    template:`
    <li *ngFor="let book of books">
    {{book.id}}:{{book.bookname}}:{{book.price}}
    </li>
    `,
}) export class BookComponent{
    books:Book[]=[
        {id:1,bookname:'java',price:91.00},
        {id:2,bookname:'php',price:92.00},
        {id:3,bookname:'c',price:93.00},
    ];
}
