import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';

@Component({
  selector: 'postList',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: any[];
  postsSubscription: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
    this.posts = this.postService.posts;
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe;
  }
}
