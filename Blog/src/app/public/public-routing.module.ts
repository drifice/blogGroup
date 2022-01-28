import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { ArticleComponent } from './component/article/article.component';
import { CommentaireComponent } from './component/commentaire/commentaire.component';
import { TagComponent } from './component/tag/tag.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { AdduserComponent } from './component/adduser/adduser.component';


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
  },
  {
    path :'tag',
    component :TagComponent,
  },
  {
    path :'categorie',
    component :CategorieComponent,
  },
  {
    path :'addUser',
    component :AdduserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
