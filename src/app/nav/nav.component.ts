import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PostModel } from '../news-feed/post-feed/post.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public newsFeedPosts: PostModel[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.newsFeedPosts = [
      {
        profilePhoto: "assets/dog.jpg",
        name: "Sr Perro",
        date: "1 hours ago",
        postText: "Hola tio, que pasa? soy en el park",
        postPhoto: "assets/nature.jpg",
        likeCount: 1,
      } as PostModel,
    ];
  }

}
