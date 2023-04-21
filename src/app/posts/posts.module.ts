import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts.routing';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { SharedModule } from '@shared/shared.module';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [PostsComponent, PostComponent, AddPostComponent],
  imports: [PostsRoutingModule, SharedModule],
  exports: [PostsComponent, PostComponent]
})
export class PostsModule { }
