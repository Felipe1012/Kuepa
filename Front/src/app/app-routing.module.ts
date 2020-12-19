import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
{
  path:'post/:id', component:PostComponent
},
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'chat', loadChildren: () => import('./components/pages/chat/chat.module').then(m => m.ChatModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
