import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICategorie } from 'src/app/core/models/categorie.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  public categories :ICategorie[] = [];

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    nbArticle: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  addCategorie(){
    if(this.checkoutForm.value.titre != '') {
      this.categories.push(this.checkoutForm.value);
    }
    console.log(this.categories)
  }
}
