import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '@shared/post.model';


@Injectable()
export class PostsService {

  logMess: string

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('../assets/blog-posts.json')
  }

  getSinglePost(id: string): Observable<Post[]> {
    return this.http.get<Post[]>('../assets/blog-posts.json')
      .pipe(map((posts) => {
        return posts.filter(post => post.id === id)
      }))
  }

  printLog(mess: string) {
    console.log(mess);
    console.log(this.logMess);
    this.logMess = mess

  }
}
