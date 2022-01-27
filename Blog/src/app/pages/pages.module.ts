import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PublicModule } from '../public/public.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PublicModule
  ]
})
export class PagesModule { }
