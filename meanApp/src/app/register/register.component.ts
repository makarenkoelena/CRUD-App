import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpassword: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }
  register() {
    if (!this.registerForm.valid || !this.registerForm.controls.password.valid || !this.registerForm.controls.cpassword.valid) {
      console.log('Invalid form!');
      return;
    }
    this.userService.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/login']);
        },
        error => console.error(error)
      );
    // else  console.log(JSON.stringify(this.registerForm.value));
  }


}
