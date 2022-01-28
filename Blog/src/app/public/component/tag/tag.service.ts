import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITag} from "../../../core/models/tag.model";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  getTags() {
    return this.http.get<ITag[]>('http://localhost:8080/tags')
  }

}
