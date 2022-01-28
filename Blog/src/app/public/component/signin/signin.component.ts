import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private baseURL = "http://localhost:8080/connexion";

  public user: IUser = {
    id: "",
    username : "admin",
    password : "admin",
    email : "admin"

  }
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password : new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit () {
    if (this.checkoutForm.value.name == this.user.username &&
      this.checkoutForm.value.email == this.user.email &&
      this.checkoutForm.value.password == this.user.password
      ) {
        console.log("connecter");
      } else {
        console.log("out");
      }
  }

  connect(user: IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(`${this.baseURL}`, user);
  }

}
