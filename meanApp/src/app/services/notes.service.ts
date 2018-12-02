import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaderResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) {
  }

  private note: Note[] = [];

// ngOnInit in list-notes.component.ts
  getNotesData(): Observable<any> {
    return this.http.get('http://localhost:8081/api/notes');
  }


  getNotes() {
    return [...this.note];
  }

  addNote(date: string, title: string, content: string): Observable<any> {
    const note: Note /*правая кнопка мыши, перейти к определению*/ = {date: date, title: title, content: content};
    return this.http.post('http://localhost:8081/api/notes', note);
  }

  deleteNote(id: String): Observable<any> {
    return this.http.delete('http://localhost:8081/api/notes/' + id);
  }

  getNote(id: string): Observable<any> {
    return this.http.get('http://localhost:8081/api/notes/' + id);
  }

  updateNote(id: string, date: string, title: string, content: string): Observable<any> {
    const note: Note = {date: date, title: title, content: content};
    return this.http.put('http://localhost:8081/api/notes/' + id, note);
  }

}
