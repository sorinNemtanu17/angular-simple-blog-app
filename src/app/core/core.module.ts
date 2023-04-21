import { NgModule } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { HttpService } from '../posts/http.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [PostsService, HttpService]
})
export class CoreModule { }
