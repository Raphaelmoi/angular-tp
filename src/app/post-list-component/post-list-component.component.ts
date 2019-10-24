import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'postList',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts: string;

  constructor() { }

  ngOnInit() {
  }

}
