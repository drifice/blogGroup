import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITag } from 'src/app/core/models/tag.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  public tags :ITag[] = [];

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    nbArticle: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  addTag(){
    if(this.checkoutForm.value.titre != '') {
      this.tags.push(this.checkoutForm.value);
    }
    console.log(this.tags)
  }
}
