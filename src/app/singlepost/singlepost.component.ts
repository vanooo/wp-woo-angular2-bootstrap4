import { Component, OnInit }  from '@angular/core';
import { PostsService }       from '../posts.service';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  slug  : string;
  post = {};

  constructor(private _posts:PostsService, private _route:ActivatedRoute){
    this.slug = _route.snapshot.params['slug'];
  }

  ngOnInit() {
    this._posts.postsBySlug(this.slug).subscribe(
      (data) => this.post = data[0]
    )
  }

}
