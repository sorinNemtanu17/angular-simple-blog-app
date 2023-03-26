import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '@shared/post.model';
import { Router } from '@angular/router';
import blogPostJson from '@assets/blog-posts.json';

@Injectable()
export class PostsService {
  private posts: Post[] = blogPostJson
  private posts$ = new BehaviorSubject<Post[]>(this.posts);
  postsChanged$ = this.posts$.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('@assets/blog-posts.json')
  }

  getPost(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  addPost(addedPost: Post) {
    this.posts = [
      ...this.posts,
      { ...addedPost, id: this.posts.length.toString() }
    ];
    this.posts$.next(this.posts);
    this.router.navigate(['/posts']);
  }

  deletePost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id);
    this.posts$.next(this.posts);
    this.router.navigate(['/posts']);
  }

  editPost(id: string, newPost: Post) {
    const oldPostIndex = this.posts.findIndex((post) => post.id === id);
    this.posts[oldPostIndex] = { ...this.posts[oldPostIndex], ...newPost };
    this.posts$.next(this.posts);
    this.router.navigate(['/posts', id]);
  }
}
