import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { GetPostsComponent } from './components/get-posts/get-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component'

import { PostService } from './services/post.service';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { AuthenticationService } from './services/authentication.service';

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { UserComponent } from './components/user/user/user.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    GetPostsComponent,
    HomeComponent,
    SidebarComponent,
    SinglePostComponent,
    CategoryPostsComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    CategoryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    PostService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
