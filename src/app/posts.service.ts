import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from './cookie.service';

// import { OAuth } from '../../node_modules/oauth-1.0a/oauth-1.0a.js';

@Injectable()

export class PostsService {

  constructor(private http:Http, private cookieservice:CookieService){}

  log(){
    console.log('я туттачки');
  }

  posttest(){
    return this.http.get('/public/post.json').map(
      (res) => res.json()
    );
  }
  posts(){
    return this.http.get('http://ivanblog.ga.dev/en/wp-json/wp/v2/posts').map(
      (res) => res.json()
    );
  }
  postsBySlug(slug){
    return this.http.get('http://ivanblog.ga.dev/en/wp-json/wp/v2/posts?slug=' + slug).map(
      (res) => res.json()
    );
  }
  me(){
    return this.http.get('http://ivanblog.ga.dev/en/wp-json/wp/v2/users/me/?access_token=' + this.cookieservice.getCookie('wordpress_access_token')).map(
      (res) => res.json()
    );
  }
  products(){
    return this.http.get('http://ivanblog.ga.dev/en/wp-json/wc/v2/products/?access_token=' + this.cookieservice.getCookie('wordpress_access_token')).map(
      (res) => res.json()
    );
  }

  // http://ivanblog.ga.dev/en/wp-json/wc/v2/customers

}
