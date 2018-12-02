import {Component, OnInit} from '@angular/core';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  notes: any = [];

  constructor(private nservice: NotesService) {
  }

  ngOnInit() {

    this.nservice.getNotesData().subscribe(data => {
      this.notes = data;
      console.log(this.notes);
    });
  }

  onDelete(id: String) {
    console.log(id + ' is deleted');
    this.nservice.deleteNote(id).subscribe(() => {
      this.ngOnInit(); // refresh the page
    });
  }
}
