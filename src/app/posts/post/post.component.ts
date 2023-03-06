import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, Observable } from 'rxjs';
import { Post } from '../../shared/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnDestroy {
  post: Post
  subscription: Subscription
  id: string

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']


    this.subscription = this.postsService.getSinglePost(this.id).subscribe(post => {
      this.post = post[0]


    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
