import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITag} from "../../../core/models/tag.model";
import {Observable} from "rxjs";
import {IUser} from "../../../core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

  }

  getUsers() {
    return this.http.get<IUser[]>('http://localhost:8080/utilisateurs')
  }

  createUser(newUser: IUser): Observable<IUser> {
    console.log(newUser);
    
    return this.http.post<IUser>('http://localhost:8080/utilisateurs', newUser);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/utilisateurs/${id}`);
  }
}
