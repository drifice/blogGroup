import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/core/models/user.model';
import {TagService} from "../tag/tag.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {


  addUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  addUser(){
    if(this.addUserForm.value.username != '') {
      const newUser =this.addUserForm.value as IUser;
      this.userService.createUser(newUser).subscribe();
    }
  }
}
