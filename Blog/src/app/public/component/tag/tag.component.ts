import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITag } from 'src/app/core/models/tag.model';
import {TagService} from "./tag.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  public tags :ITag[] = [];

  checkoutForm = new FormGroup({
    titre: new FormControl(''),
    nombreArticle: new FormControl('')
  });
  constructor(private tagService : TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(value => this.tags = value);
  }

  addTag(){
    if(this.checkoutForm.value.titre != '') {
      const newTag = this.checkoutForm.value as ITag;
      this.tagService.createTag(newTag).subscribe();
      this.tags.push(this.checkoutForm.value);
    }
    console.log(this.tags)
  }

  deleteTag(id: string) {
    this.tagService.deleteTag(id)
      .subscribe(value => this.tagService.getTags().subscribe(value => this.tags = value));
  }
}
