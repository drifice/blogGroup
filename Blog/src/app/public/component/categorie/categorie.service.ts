import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITag} from "../../../core/models/tag.model";
import {Observable} from "rxjs";
import {ICategorie} from "../../../core/models/categorie.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  getCategories() {
    return this.http.get<ICategorie[]>('http://localhost:8080/categories')
  }

  createCategorie(newCategorie: ICategorie): Observable<ICategorie> {
    return this.http.post<ICategorie>('http://localhost:8080/categories', newCategorie);
  }

  deleteCategorie(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/categories/${id}`);
  }
}
