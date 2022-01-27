import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import ('./pages/pages.module')  
    .then(m =>m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import ('./public/public.module')  
    .then(m =>m.PublicModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
