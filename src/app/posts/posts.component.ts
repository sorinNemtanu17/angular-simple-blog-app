import { Component } from '@angular/core';
import { Post } from '@shared/post.model';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$: Observable<Post[]> = this.postService.postsChanged$;

  constructor(private postService: PostsService) {}
}
