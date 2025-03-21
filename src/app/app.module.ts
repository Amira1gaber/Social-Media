import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/post/user/user.component';
import { DataComponent } from './components/post/data/data.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { ReactsComponent } from './components/post/reacts/reacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { InputOutputComponent } from './demo/input-output/input-output.component';
import { ParentComponent } from './demo/input-output/parent/parent.component';
import { ChildComponent } from './demo/input-output/parent/child/child.component';
import { PostformComponent } from './components/post/postform/postform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { notAuthGuard } from './guard/not-auth.guard';
import { authGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes =
[
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'login',
    component: LoginformComponent,
    canActivate: [notAuthGuard]
  },
  {
    path: 'register',
    component: RegisterformComponent,
    canActivate: [notAuthGuard]
  },
  {
    path: 'createPost',
    canActivate: [authGuard],
    component: PostformComponent
  },
  {
    path: 'editPost/:postId',
    canActivate: [authGuard],
    component: PostformComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    UserComponent,
    DataComponent,
    CommentsComponent,
    ReactsComponent,
    DemoComponent,
    InputOutputComponent,
    ParentComponent,
    ChildComponent,
    PostformComponent,
    LoginformComponent,
    RegisterformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
