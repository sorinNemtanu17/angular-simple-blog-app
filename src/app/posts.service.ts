import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Post } from './shared/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('../assets/blog-posts.json')
  }

  getSinglePost(id: string): Observable<Post[]> {
    return this.http.get<Post[]>('../assets/blog-posts.json').pipe(map(posts => {
      return posts.filter(post => post.id === id)
    }))
  }
}
