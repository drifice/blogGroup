import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/core/models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  public user :IUser[] =[];

  checkoutForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(value => this.user = value);
  }

  addUser(){
    if(this.checkoutForm.value.username != '') {
      const newUser = this.checkoutForm.value as IUser;
      this.userservice.createUser(newUser).subscribe();
      this.user.push(this.checkoutForm.value);
      this.seeUser();
    }
  }
  seeUser() {
    this.userservice.getUsers().subscribe(value => console.log(value));
  }
}
