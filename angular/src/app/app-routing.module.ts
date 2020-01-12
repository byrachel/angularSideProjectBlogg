import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostComponent } from './components/add-post/add-post.component';
import { GetPostsComponent } from './components/get-posts/get-posts.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { UserComponent } from './components/user/user/user.component';


const routes: Routes = [
  { path: 'post/create', canActivate: [AuthGuard], component: AddPostComponent },
  { path: 'post/update/:id', canActivate: [AuthGuard], component: AddPostComponent },
  { path: 'posts', component: GetPostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'post/api/:category', component: CategoryPostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
