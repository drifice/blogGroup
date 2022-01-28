import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/core/models/user.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

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
    private httpClient: HttpClient,
    private signinService: SigninService
  ) { }

  ngOnInit(): void {
  }

  onSubmit () {
    
    this.user.username = this.checkoutForm.value.name;
    this.user.email = this.checkoutForm.value.email;
    this.user.password = this.checkoutForm.value.password;
    this.connect(this.user);
  }

  connect(user: IUser){
    this.signinService.connect(user).subscribe(userFound => {

      if(userFound != null){
        console.log("connecté");
      }
      else{
        console.log("Utilisateur inconnu");
      }
    });
  }
}
