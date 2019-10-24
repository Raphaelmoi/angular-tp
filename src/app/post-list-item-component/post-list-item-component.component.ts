import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: string;

  creationDate = new Date();

  constructor() { 
  }

  ngOnInit() {
  }

  onLove(value){
    this.postLove += value;
    console.log(this.postLove);
  }
}
