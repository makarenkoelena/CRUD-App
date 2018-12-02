import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AddNotesComponent} from './add-notes/add-notes.component';
import {ListNotesComponent} from './list-notes/list-notes.component';
import {EditNotesComponent} from './edit-notes/edit-notes.component';
import {NotesService} from './services/notes.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {BooksService} from './services/books.service';

import {
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';

import {RegisterComponent} from './register/register.component';
import { DisplayBooksComponent } from './display-books/display-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    AddNotesComponent,
    ListNotesComponent,
    RegisterComponent,
    EditNotesComponent,
    DisplayBooksComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'list',
        component: ListNotesComponent
      },
      {
        path: 'add',
        component: AddNotesComponent
      },
      {
        path: 'edit/:id',
        component: EditNotesComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      }


    ])

  ],

  exports: [
  ],
  providers: [NotesService, UserService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
