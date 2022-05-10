import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { ContentLimiterPipe } from './Pipes/content-limiter.pipe';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddCardinalPipe } from './Pipes/add-cardinal.pipe';
import { EditBookComponent } from './components/edit-book/edit-book.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ContentLimiterPipe,
    AddBookComponent,
    AddCardinalPipe,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
