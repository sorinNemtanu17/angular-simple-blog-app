import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@shared/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {

    this.postService.postsChanged$.subscribe((data) => {
      this.posts = data;
    });
  }
}
