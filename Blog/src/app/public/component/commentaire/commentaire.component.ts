import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICommentaire } from 'src/app/core/models/commentaire.model';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  public commentaires :ICommentaire[] = [];

  checkoutForm = new FormGroup({
    contenu: new FormControl(''),
    user: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  addComent(){
    if(this.checkoutForm.value.contenu != '') {
      this.commentaires.push(this.checkoutForm.value);
    }
    console.log(this.commentaires)
  }

}
