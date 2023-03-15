import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '@shared/post.model';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('./assets/blog-posts.json');
  }
  getSingePosts(id): Observable<Post> {
    return this.http.get<Post[]>('./assets/blog-posts.json').pipe(
      map((data) => {
        const newPost = data.findIndex((post) => post.id === id);

        return data[newPost];
      })
    );
  }
}
