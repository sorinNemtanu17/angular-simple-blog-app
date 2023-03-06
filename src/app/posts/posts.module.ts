import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts.routing';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  imports: [
    PostsRoutingModule,
    SharedModule,
  ],
  exports: [
    PostsComponent,
    PostComponent,
  ],

})
export class PostsModule { }
