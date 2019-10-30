import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [
    {
      title: 'Mon premier article',
      content:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.'", 
      loveIts: 1,
    },
    {
      title: 'Mon Second article',
      content: "est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'", 
      loveIts: 0,
    },    
    {
      title: 'Mon troisième article',
      content: "vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
      loveIts: -1,
    },
  ];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts)
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.emitPosts();
  }

  deletePost(id){
      this.posts.splice(id, 1);
      this.emitPosts();
  }
}
