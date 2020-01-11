import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { GetPostsComponent } from './components/get-posts/get-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component'

import { PostService } from './services/post.service';

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    GetPostsComponent,
    HomeComponent,
    SidebarComponent,
    SinglePostComponent,
    CategoryPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
