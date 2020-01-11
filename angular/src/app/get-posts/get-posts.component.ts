import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css']
})
export class GetPostsComponent implements OnInit {

  Post: any = [];

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.displayPosts();
  }

  displayPosts(){
    this.postService.getPosts().subscribe((data) => {
      this.Post = data;
      console.log(data)
    })    
  }

  onClickPost(id: number) {
    this.router.navigate(['/post', id]);
  }

}
