import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// map on service to work

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { PostsService } from './posts.service';
import { PostlistComponent } from './postlist/postlist.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

const appRoutes: Routes = [
  {path:':slug',      component : SinglepostComponent},
  {path:'',        component : PostlistComponent}
]

// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'heroes',        component: HeroListComponent },
//   { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    SinglepostComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
