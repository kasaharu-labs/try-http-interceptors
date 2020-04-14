import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../domain/models';
import { PostRepository } from '../infrastructures/repositories/post.repository';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private postRepository: PostRepository) {}
  // tslint:disable-next-line: variable-name
  private _posts$ = new BehaviorSubject<Post[] | null>(null);

  get post$() {
    return this._posts$.asObservable();
  }

  async fetch() {
    const posts = await this.postRepository.fetchAll().toPromise();
    this._posts$.next(posts);
  }
}
