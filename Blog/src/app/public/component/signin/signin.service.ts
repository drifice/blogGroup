import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITag} from "../../../core/models/tag.model";
import {Observable} from "rxjs";
import {IUser} from "../../../core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) {

  }

  connect(user: IUser){
    return this.http.post<IUser>("http://localhost:8080/connexion", user);
  }

  
}
