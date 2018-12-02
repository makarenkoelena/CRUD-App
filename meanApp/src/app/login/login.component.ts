import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  counter: any = 0;
  user: any = [];
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private service: UserService) {
  }

  ngOnInit() {
    this.service.getUserData().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  moveToRegister() {
    this.router.navigate(['/register']);
  }

  moveToLogin() {
    if (!this.loginForm.valid) {
      console.log('Invalid form!');
      return;
    }
    // this._userService.register(JSON.stringify(this.registerForm.value))
    // .subscribe(
    //   data=> {console.log(data); this._router.navigate(['/login']);},
    //   error=>console.error(error)
    // )
    // console.log(JSON.stringify(this.loginForm.value));
    console.log('Valid form!');
     }
}
