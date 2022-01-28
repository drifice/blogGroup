import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { ArticleComponent } from './component/article/article.component';
import { CommentaireComponent } from './component/commentaire/commentaire.component';


const routes: Routes = [
  {
    path :'signin',
    component :SigninComponent,
  },
  {
    path :'article',
    component :ArticleComponent,
  },
  {
    path :'commentaire',
    component :CommentaireComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
