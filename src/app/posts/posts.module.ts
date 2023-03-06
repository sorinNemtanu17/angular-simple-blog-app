import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts.routing';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    // SetBackgroundImageDirective
  ],
  imports: [
    PostsRoutingModule,
    SharedModule,
  ],
  exports: [
    // PostsComponent,
    // PostComponent,

  ],
  providers: [],
})
export class PostsModule { }
