import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITag} from "../../../core/models/tag.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  getTags() {
    return this.http.get<ITag[]>('http://localhost:8080/tags')
  }

  createTag(newTag: ITag): Observable<void> {
    return this.http.post<void>('http://localhost:8080/tags', newTag);
  }

  deleteTag(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/tags/${id}`);
  }
}
