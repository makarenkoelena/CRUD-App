import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private user: User[] = [];

// ngOnInit in .component.ts
  getUserData(): Observable<any> {
    return this.http.get('http://localhost:8081/api/users');
  }


  getUsers() {
    return [...this.user];
  }

  register(body: any) {
    return this.http.post('http://localhost/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // login(body:any){
  //   return this.http.post('http://127.0.0.1:3000/users/login',body,{
  //     observe:'body',
  //     withCredentials:true,
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   });
  // }

  // user(){
  //   return this.http.get('http://127.0.0.1:3000/users/user',{
  //     observe:'body',
  //     withCredentials:true,
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   })
  // }

  // logout(){
  //   return this.http.get('http://127.0.0.1:3000/users/logout',{
  //     observe:'body',
  //     withCredentials:true,
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   })
  // }

}
