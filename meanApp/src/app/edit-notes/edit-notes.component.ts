import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Routes, RouterModule, Router} from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-note-edit',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {
  review: any = [];
  myTitle: String;
  myContent: String;
  constructor(private router: Router, private route: ActivatedRoute, private service: NotesService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getNote(this.route.snapshot.params['id']).subscribe(data => {
      this.review = data;
      console.log(this.review);
      this.myTitle = this.review.title;
      console.log('message ' + this.myTitle);

    });
  }
  onEditNote(form: NgForm) {
    this.service.updateNote(this.review._id, form.value.date, form.value.title, form.value.content).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
