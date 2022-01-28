import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SigninComponent } from './component/signin/signin.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './component/article/article.component';
import { CommentaireComponent } from './component/commentaire/commentaire.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { TagComponent } from './component/tag/tag.component';
import { AdduserComponent } from './component/adduser/adduser.component';



@NgModule({
  declarations: [
    SigninComponent,
    ArticleComponent,
    CommentaireComponent,
    CategorieComponent,
    TagComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,  
  ]
})
export class PublicModule { }
