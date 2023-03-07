import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
