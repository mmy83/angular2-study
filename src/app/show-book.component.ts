import { Component, Input} from '@angular/core';

import {Book} from './book';

@Component({
    selector:"show-book",
    template:`
    {{book.id}}:{{book.bookname}}:{{book.price}}
    `
})
export class ShowBookComponent {

    @Input()
    book:Book;

}