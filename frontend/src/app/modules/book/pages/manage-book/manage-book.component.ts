import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {BookResponse} from '../../../../services/models/book-response';
import {BookRequest} from '../../../../services/models/book-request';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-manage-book',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.scss'
})
export class ManageBookComponent {
  bookRequest: BookRequest = {authorName: "", isbn: "", synopsis: "", title: ""};
  errorMsg: Array<string> = [];
  selectedBookCover: any;
  selectedPicture: string | undefined;

  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);
    if(this.selectedBookCover){
      const reader = new FileReader();
      reader.onloadend = ():void => {
        this.selectedPicture = reader.result as string;
      }
      reader.readAsDataURL(this.selectedBookCover);
    }
  }
}
