import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  interpolation: ['#', '#']
})
export class BooksComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  // public firstBookName = "Electrical Engineering Principals and Applications";
  // public isCheap = false;
  // public bookThreePrice = 200;
  // public bookTwoPrice = 1020;
  // public bookOnePrice = 999;
  // public isCheap = false;
  
  public isRowSelected : boolean;
  public rowIndex : number;
  public isAddBooksHidden : boolean = true;
  


  public bookList = [
    {
      'bookName': 'Electrical Engineering Principals and Applications',
      'bookAuthors': 'Allan R. Hambley',
      'edition': '5th',
      'publishedYear': '2007',
      'price': 1200,
      'subject': 'Electrical',
      'publishers': 'ABC Publishers'
    },
    {
      'bookName': 'Mechanics for Engineers – Statics and Dynamics',
      'bookAuthors': 'F.P. Beer & E.R. Johnston',
      'edition': '2nd',
      'publishedYear': '2003',
      'price': 1400,
      'subject': 'Mechanics-Statics',
      'publishers': 'McGraw-Hill Book Co.'
    },
    {
      'bookName': 'Materials Science and Engineering',
      'bookAuthors': 'William D. Callister',
      'edition': '5th',
      'publishedYear': '2014',
      'price': 1400,
      'subject': 'Properties of Materials',
      'publishers': 'John Wiley & Sons, Inc.'
    },
    {
      'bookName': 'Vector Mechanics for Engineers',
      'bookAuthors': 'Ferdinand P. Beer & E. Russell Johnston Jr.',
      'edition': '9th',
      'publishedYear': '1990',
      'price': 850,
      'subject': 'Mechanics - Dynamics',
      'publishers': ' McGraw-Hill Book Company'
    },

    {
      'bookName': " Engineering Materials - Introduction to their Properties & Applications",
      'bookAuthors': 'Ashby, M. F., Jones, D. R. H',
      'edition': '5th',
      'publishedYear': '1991',
      'price': 1400,
      'subject': 'Properties of Materials',
      'publishers': 'Pergamon Press, U.K.'
    },

    {
      'bookName': 'Introduction to Computing Using Python: An Application Development Focus',
      'bookAuthors': 'Ljubomir Perkovic',
      'edition': '1st',
      'publishedYear': '2017',
      'price': 570,
      'subject': 'Computer Science',
      'publishers': 'ABC Publishers'
    },
  ]

  

  public selectRow(selectedRow:number){
    this.isRowSelected = true;
    this.rowIndex = selectedRow;

  }

  public showAddBooks() {
    this.isAddBooksHidden = false;
  }

  public hideAddBooks() {
    this.isAddBooksHidden = true;
  }
  
  

}
