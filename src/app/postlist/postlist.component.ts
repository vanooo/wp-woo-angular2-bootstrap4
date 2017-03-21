import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})

export class PostlistComponent implements OnInit {
  posts = [];
  constructor(private _posts:PostsService) { }

  ngOnInit() {
    this._posts.posts().subscribe(
      (data) => this.posts = data
      // console.log(this.posts)
    )
  }

}
