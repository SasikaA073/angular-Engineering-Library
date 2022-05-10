import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import { Book } from 'src/app/model/book.model';
// import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
    bookForm = this.fb.group({
      bookName: ['', Validators.required],
      bookAuthors: ['', Validators.required],
      edition: ['', Validators.required],
      publishedYear : ['', Validators.required],
      price: ['', Validators.required],
      subject: ['', Validators.required],
      publishers: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators. required, Validators.min(50)]],
      createdDate: ['', Validators.required],
    });
   

  ngOnInit(): void {
    // alert('ngOnInit called');
    console.log("triggered ngOnInit")
  }
  
  public isDataUploading : boolean;

  ngDoCheck() {
    console.log("triggered ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("triggered ngAfterContetnInit")

  }
  ngAfterContentChecked() {
    console.log("triggered ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("triggered ngAfterViewInit");
  }
  ngAfterviewChecked() {
    console.log("triggered ngAfterViewChecked");
  }
  ngOnDestroy () {
    // alert("ngDestroy Called");
    console.log("triggered ngOnDestroy");
  }



  
  public onSubmit(){
    const values = this.bookForm.value as Book;
    values.createdDate = new Date().toDateString();
    // this.bookService.addBookElement(values as Book).subscribe((res) => {this.bookForm.reset()})
    
  }


}
