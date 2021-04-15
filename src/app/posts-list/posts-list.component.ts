import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor() { }

  // ngOnInit() is called everytime when the component is being rendered on the page.
  ngOnInit(): void {
  }
  // Tell the post-list component to recieve the data from post-service.
  getPosts() : void{
    
  }
}
