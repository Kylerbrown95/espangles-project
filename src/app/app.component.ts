import { Component } from '@angular/core';
import { PostModel } from './news-feed/post-feed/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  public newsFeedPosts: PostModel[] = [];

  ngOnInit(): void {
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