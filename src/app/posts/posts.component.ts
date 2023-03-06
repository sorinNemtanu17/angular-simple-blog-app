import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@shared/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts$: Observable<Post[]> = this.postService.getAllPosts()

  constructor(private postService: PostsService) { }
}
