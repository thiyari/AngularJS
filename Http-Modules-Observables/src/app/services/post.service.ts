import {Injectable} from '@angular/core';
import {Post} from '../Post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
//import {POSTS} from '../mock-posts';

@Injectable()
export class PostService{
	constructor(private _http:HttpClient){

	}
	getPosts(){
		return this._http.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
		.pipe(map((res:any) => res));

	}

	addPost(post:any){
		var headers = new HttpHeaders();
		headers.append('Content-Type','application/json');
		return this._http.post('https://jsonplaceholder.typicode.com/posts',post,{headers:headers})
		.pipe(map((res:any) => res));
	}
}
