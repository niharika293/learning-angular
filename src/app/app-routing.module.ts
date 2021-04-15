import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';

// Routing Module makes sure which component is to be rendered when certain link is clicked. 
const routes: Routes = [
  {path : 'posts-list', component : PostsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
