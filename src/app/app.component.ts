import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mon Projet Angular';

  posts = [];

  constructor() {

    const post = new Post();
    post.title = 'Les noyaux du porc';
    post.content = 'Les noyaux du porc sont très beaux quand ils sont cuisinés avec de la tomate';
    this.posts.push(post);
    const post2 = new Post();
    post2.title = 'Les femmes valent moins que les hommmes';
    post2.content = 'Quoi que le monde moderne puisse nous faire croire, les femmes ont depuis la création étaient inférieures aux hommes';
    this.posts.push(post2);
    const post3 = new Post();
    post3.title = 'Ronaldo vs Messi';
    post3.content = 'Après des longues années au haut niveau, il est enfin temps de comparer ses deux dinausaures du Football';
    this.posts.push(post3);

  }

}
