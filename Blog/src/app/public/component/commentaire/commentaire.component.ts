import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICommentaire } from 'src/app/core/models/commentaire.model';
import {CommentaireService} from "./commentaire.service";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  public commentaires :ICommentaire[] = [];

  checkoutForm = new FormGroup({
    contenu: new FormControl('')
  });
  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.commentaireService.getCommentaires().subscribe(value => this.commentaires = value);
  }

  addComent(){
    if(this.checkoutForm.value.contenu != '') {
      const newCommentaire = this.checkoutForm.value as ICommentaire;
      newCommentaire.utilisateurId = '61f402568c81782bd20c8d71'; // id en dur en attendant la connexion
      this.commentaireService.createCommentaire(newCommentaire)
        .subscribe(value => this.commentaireService.getCommentaires().subscribe(value => this.commentaires = value));
    }
    console.log(this.commentaires)
  }

}
