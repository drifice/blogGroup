import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ICategorie} from 'src/app/core/models/categorie.model';
import {CategorieService} from "./categorie.service";
import {ITag} from "../../../core/models/tag.model";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  public categories: ICategorie[] = [];

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    nombreArticle: new FormControl('')
  });

  constructor(private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(value => this.categories = value);
  }

  addCategorie() {
    if (this.checkoutForm.value.titre != '') {
      const newCategorie = this.checkoutForm.value as ICategorie;
      this.categorieService.createCategorie(newCategorie)
        .subscribe(value => this.categories.push(value));
    }
    console.log(this.categories)
  }

  deleteCategorie(id: string) {
    this.categorieService.deleteCategorie(id)
      .subscribe(value => this.categorieService.getCategories().subscribe(value => this.categories = value));
  }
}
