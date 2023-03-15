import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@shared/post.model';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  //post: Post;
  id: string;
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.post$ = this.httpService.getSingePosts(this.id);
    //this.post = this.postsService.getPost(this.id);
  }

  onDelete() {
    this.postsService.deletePost(this.id);
  }
}
