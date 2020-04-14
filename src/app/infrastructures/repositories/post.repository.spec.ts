import { TestBed } from '@angular/core/testing';

import { PostRepository } from './post.repository';

describe('PostRepository', () => {
  let repository: PostRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(PostRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});
