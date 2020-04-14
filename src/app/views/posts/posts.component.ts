import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../../applications/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}
  readonly posts$ = this.postService.post$;

  ngOnInit(): void {
    this.postService.fetch();
  }
}
