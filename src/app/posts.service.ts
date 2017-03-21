import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {

  constructor(private http:Http){}

  log(){
    console.log('я туттачки');
  }

  posttest(){
    return this.http.get('/public/post.json').map(
      (res) => res.json()
    );
  }
  posts(){
    return this.http.get('http://ivanblog.ga.dev/wp-json/wp/v2/posts').map(
      (res) => res.json()
    );
  }
  postsBySlug(slug){
    return this.http.get('http://ivanblog.ga.dev/wp-json/wp/v2/posts?slug=' + slug).map(
      (res) => res.json()
    );
  }

}
