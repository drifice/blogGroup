import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticle } from 'src/app/core/models/article.model';
import {ICategorie} from "../../../core/models/categorie.model";
import {ITag} from "../../../core/models/tag.model";
import {ArticleService} from "./article.service";
import {CategorieService} from "../categorie/categorie.service";
import {TagService} from "../tag/tag.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles :IArticle[] = [];
  public categories :ICategorie[] = [];
  public tags :ITag[] = [];

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    slug: new FormControl(''),
    description : new FormControl(''),
    dateDeCreation: new FormControl(''),
    contenu: new FormControl(''),
    auteur : new FormControl(''),
    imageDePresentation: new FormControl(''),
    categoryId: new FormControl(''),
    tagIds : new FormControl(''),
  });

  tagsSelected: string[] = [];

  constructor(private articleService: ArticleService,
              private categorieService: CategorieService,
              private tagService: TagService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(value => this.articles = value);
    this.categorieService.getCategories().subscribe(value => this.categories = value);
    this.tagService.getTags().subscribe(value => this.tags = value);
  }

  addArticle() {
    if(this.checkoutForm.value.titre != '') {
      let newArticle = this.checkoutForm.value as IArticle;
      newArticle.utilisateurId = '61f402568c81782bd20c8d71'; // id en dur en attendant la connexion
      newArticle.tagIds = this.tagsSelected;
      this.articleService.createArticle(newArticle)
        .subscribe(value => this.articleService.getArticles().subscribe(value => this.articles = value));
    }
  }

  onTagChange(e: any) {
    if (e.target.checked) {
      this.tagsSelected.push(e.target.value);
    } else {
      let i: number = 0;
      this.tagsSelected.forEach((item) => {
        if (item == e.target.value) {
          this.tagsSelected.splice(i);
          return;
        }
        i++;
      });
    }
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id)
      .subscribe(value => this.articleService.getArticles().subscribe(value => this.articles = value));
  }
}
