import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { CookieService } from '../cookie.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})

export class PostlistComponent implements OnInit {
  posts = [];
  me = {};
  selectpost = {};
  varcookieservice = '';
  products = {};

  constructor(private postservice:PostsService, private cookieservice:CookieService) { }

  editPost = function(post, form:NgForm){
    this.selectpost.id = post.id;
    this.selectpost.title = post.title.rendered;

  };

  // updatePost = function(form: NgForm){
  //   console.log(form)
  // }

  updatePost(form: NgForm) {
    console.log(form.value.id, form.value.title)
    // console.log(f.value);
    console.log(this.selectpost);
  }


  // updatePost = function(){
  //   console.log('update');
  // }

  ngOnInit() {

    console.log(this.cookieservice.getCookie('wordpress_access_token'));

    this.postservice.posts().subscribe(
      (data) => this.posts = data
      // console.log(this.posts)
    )
    this.postservice.me().subscribe(
      (data) => this.me = data
    )
    this.postservice.products().subscribe(
      (data) => this.products = data
    )

  }

}
