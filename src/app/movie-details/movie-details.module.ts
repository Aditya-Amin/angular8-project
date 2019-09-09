import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'movie-details/:id', component: MovieDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class MovieDetailsModule { }
