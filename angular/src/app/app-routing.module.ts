import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostComponent } from './components/add-post/add-post.component';
import { GetPostsComponent } from './components/get-posts/get-posts.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component'

const routes: Routes = [
  { path: 'post/create', component: AddPostComponent },
  { path: 'post/update/:id', component: AddPostComponent },
  { path: 'posts', component: GetPostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'post/api/:category', component: CategoryPostsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
