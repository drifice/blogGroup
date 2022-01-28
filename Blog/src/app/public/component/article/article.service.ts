import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICommentaire} from "../../../core/models/commentaire.model";
import {IArticle} from "../../../core/models/article.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<IArticle[]>('http://localhost:8080/articles')
  }

  createArticle(newArticle: IArticle): Observable<IArticle> {
    return this.http.post<IArticle>('http://localhost:8080/articles', newArticle);
  }

  deleteArticle(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/articles/${id}`);
  }
}
