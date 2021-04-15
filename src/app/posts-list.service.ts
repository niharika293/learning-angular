// We'll use HTTPClient to interat with the outer world.
// Injectable acts as a Decorator that marks a class as available to be provided and injected as a dependency.
// It tells that this service can be accessed by root. 
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {
  // Evey library that we want to use, will be passed as an argument in this constructor.
  // Observable acts as a service. Many components can request data fro the observable.
  constructor(private http : HttpClient) { }

  // () to fetch the posts from the posts api in codeial project.
  getPosts() : Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/v1/posts');
  }

}
