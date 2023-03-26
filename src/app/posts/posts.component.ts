import { Component } from '@angular/core';
import { Post } from '@shared/post.model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$: Observable<Post[]> = this.postService.postsChanged$;
  //posts$: Observable<Post[]> = this.httpService.getAllPosts();

  constructor(
    private postService: PostsService,
    private httpService: HttpService
  ) { }
}
