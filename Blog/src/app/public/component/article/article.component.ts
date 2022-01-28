import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticle } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles :IArticle[] = [];

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    slug: new FormControl(''),
    description : new FormControl(''),
    dateDeCreation: new FormControl(''),
    contenu: new FormControl(''),
    auteur : new FormControl(''),
    imageDePresentation: new FormControl(''),
    categorie: new FormControl(''),
    listeDeTag : new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  addArticle() {
    if(this.checkoutForm.value.titre != '') {
      this.articles.push(this.checkoutForm.value);
    }
    console.log(this.articles)
  }

}
