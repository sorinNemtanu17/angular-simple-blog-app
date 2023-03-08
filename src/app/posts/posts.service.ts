import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Post } from '@shared/post.model';
import { Router } from '@angular/router';
import blogPostJson from '@assets/blog-posts.json';

@Injectable()
export class PostsService {
  private posts: Post[] = blogPostJson;
  private posts$ = new BehaviorSubject<Post[]>(this.posts);
  postsChanged$ = this.posts$.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getPost(id: string): Post {
    return this.posts.find((post) => post.id === id);
  }

  addPost(addedPost: Post) {
    this.http
      .get<Post[]>('../assets/blog-posts.json')
      .pipe(
        map((data) => {
          const newData = [
            ...data,
            { ...addedPost, id: data.length.toString() }
          ];
          return newData;
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.posts = [...data];
        this.posts$.next(this.posts);
        this.router.navigate(['/posts']);
      });
  }

}
