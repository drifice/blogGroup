import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICommentaire} from "../../../core/models/commentaire.model";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

  getCommentaires() {
    return this.http.get<ICommentaire[]>('http://localhost:8080/commentaires')
  }

  createCommentaire(newCommentaire: ICommentaire): Observable<ICommentaire> {
    return this.http.post<ICommentaire>('http://localhost:8080/commentaires', newCommentaire);
  }

  deleteCommentaire(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/commentaires/${id}`);
  }
}
