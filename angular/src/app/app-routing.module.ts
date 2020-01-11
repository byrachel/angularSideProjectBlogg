import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostComponent } from './add-post/add-post.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component'

const routes: Routes = [
  { path: 'post/create', component: AddPostComponent },
  { path: 'posts', component: GetPostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
