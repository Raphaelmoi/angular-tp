import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'post',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: string;
  @Input() index: number;

  creationDate = new Date();

  constructor(private postsService: PostsService
    ) { 
  }

  ngOnInit() {
  }

  onLove(value){
    this.postLove += value;
  }

  onDelete(id){
    this.postsService.deletePost(id);
  }  
}
