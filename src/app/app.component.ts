import { Component, OnInit }    from '@angular/core';
import { PostsService }         from './posts.service';
import { ActivatedRoute }       from '@angular/router';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app works!';
  posts = [];
  slug : string;

  constructor(private _posts:PostsService, private _route:ActivatedRoute){
    this.slug = _route.snapshot.params['slug'];
    // console.log(_route);
  };

  // logclick(){
  //   // this._posts.log();
  //   this._posts.posts();
  // }

  // routeGo(data){
  //   console.log(data);
  // }

  ngOnInit(){
    this._posts.posts().subscribe(
      (data) => this.posts = data
    )
  }


}
