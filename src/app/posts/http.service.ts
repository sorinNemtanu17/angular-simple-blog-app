import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@shared/post.model';
import { map, Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private router: Router) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('./assets/blog-posts.json');
  }

  getSingePosts(id) {
    return this.http.get<Post[]>('./assets/blog-posts.json').pipe(
      map((posts) => {
        const postIndex = posts.findIndex((post) => post.id === id);
        return posts[postIndex];
      })
    );
  }

  editPost(id: string, newPost: Post) {
    this.http.get<Post[]>('./assets/blog-posts.json').pipe(map(posts => {
      const oldPostIndex = posts.findIndex((post) => post.id === id);
      posts[oldPostIndex] = { ...posts[oldPostIndex], ...newPost }
      return posts
    })).subscribe(() => {

      this.router.navigate(['/posts', id]);
    })
  }

}
