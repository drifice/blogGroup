import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>('http://localhost:8080/utilisateurs')
  }

  createUser(newTag: IUser): Observable<void> {
    return this.http.post<void>('http://localhost:8080/utilisateurs', newTag);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/utilisateurs/${id}`);
  }
}
