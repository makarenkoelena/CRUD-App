import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import {Note} from '../note.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  note: any = [];
  constructor(private service: NotesService) { }

  onAddNote(form: NgForm) {

    this.service.addNote(form.value.date, form.value.title, form.value.content).subscribe(); // add .subscribe() here

    console.log(form.value);
    form.resetForm();
  }
  ngOnInit() {
    // this.service.getNotesData().subscribe(data => {
    //     this.note = data;
    //     console.log(this.note);
    //   });
  }
}
