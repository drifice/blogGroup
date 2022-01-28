import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SigninComponent } from './component/signin/signin.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './component/article/article.component';



@NgModule({
  declarations: [
    SigninComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,  
  ]
})
export class PublicModule { }
