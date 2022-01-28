import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  public user :IUser ={ 
    username :"",
    password :"",
    email :""
};

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    nbArticle: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    if(this.checkoutForm.value.username != '') {
      this.user =this.checkoutForm.value;
    }
    console.log(this.user)
  }
}
