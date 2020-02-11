import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import Post from 'src/app/models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.css']
})
export class CategoryPostsComponent implements OnInit {

  posts: Post[] = [];
  category: string = '';

  constructor(private postService: PostService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let category = this.actRoute.snapshot.paramMap.get('category');
    this.category = category;
    console.log(this.category);
    this.displayPosts(category);
  }

  displayPosts(category:string) {
    this.postService.getPostsByCategory(category)
      .subscribe(data => {
        this.posts = data;
      });
  }

  onClickPost(id: string) {
    this.router.navigate(['/post', id]);
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
