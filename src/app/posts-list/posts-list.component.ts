import { Component, OnInit } from '@angular/core';
import {PostsListService} from '../posts-list.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  // when i wrote posts : [] , gave me an error. re-writing it this way cuz 
  // 1. It is because TypeScript 2.7 includes a strict class checking where all the properties should be initialized in the constructor.
  // 2. {explanation : When you add an exclamation mark after variable/property name, you’re telling to TypeScript that you’re certain that value is not null or undefined.}
  posts!: [any]; //initially, posts would be empty.
  // assigning any here to get rid of the error.
  // Error : Property does not exist on type 'never TS2339
  // Explanation : post instances were being assignedd to as null initially, The compiler infers that it can never be anything other than null
  // Ressolution : annotating a variable with type Any is essentially telling the compiler to bypass the type system, and in general not check type compatibility for this variable. 
 

  constructor(private postsListService : PostsListService) { }

  // ngOnInit() is called everytime when the component is being rendered on the page.
  ngOnInit() {
    this.getPosts();
  }
  // Tell the post-list component to recieve the data from post-service.
  getPosts() : void{
    this.postsListService.getPosts().subscribe((data) => {this.posts = data.posts});
  }
}
