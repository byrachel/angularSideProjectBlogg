import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from '../../services/post.service'
import Post from '../../models/Post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post = {
    title: '',
    category: '',
    resum: '',
    content: '',
    link: '',
    like: 0
  }

  isAuth: boolean = true;

  constructor(private postService: PostService,
              private actRoute: ActivatedRoute,
              private router: Router,
              private ngZone: NgZone) {}
  

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.displayPost(id);

  }

  displayPost(id:string) {
    this.postService.getPost(id)
      .subscribe(data => {
        this.post = data;
      });
  }
  
  onStar(id:string,like:number) {
    like ++
    this.postService.updateLike(id,like).subscribe(
      (res) => {
        console.log('ok')
      }, (error) => {
        console.log(error)
      }
    )
  }

  onEditPost(id:string) {
    if(this.isAuth) {
      this.router.navigate(['/post', 'update', id]);
      }
    else {
      this.router.navigate(['/']);
    }
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  onClickCategory(category: string) {
    this.router.navigate(['/post/api', category]);
  }

}
