import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { ArticleComponent } from './component/article/article.component';


const routes: Routes = [
  {
    path :'signin',
    component :SigninComponent,
  },
  {
    path :'article',
    component :ArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
