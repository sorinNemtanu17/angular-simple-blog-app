import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';

import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: 'add-post',
        component: AddPostComponent,
        canDeactivate: [
          (component: AddPostComponent) => component.canDeactivate()
        ]
      },
      {
        path: 'edit-post/:id',
        component: AddPostComponent,
        canDeactivate: [
          (component: AddPostComponent) => component.canDeactivate()
        ]
      }
    ]
  },
  { path: ':id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
