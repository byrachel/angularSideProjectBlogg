import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";

import { PostService } from '../../services/post.service';
import Post from 'src/app/models/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  defaultCategory = 'Framework';
  post: Post[] = [];
  _id: string = '';
  editMode: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router,
              private ngZone: NgZone,
              private actRoute: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required] ],
      category: ['', [Validators.required] ],
      resum: ['', [Validators.required] ],
      content: ['', [Validators.required] ],
      link: ['', [Validators.required] ],
    });
  }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    if(id) {
      this.editMode = true;
      this.getPostToEdit(id);
    } else {
      console.log('Ajoutez un post !')
    }
  }

  getPostToEdit(id:string) {
    this.postService.getPost(id).subscribe(data => {
      this._id = data._id;
      this.postForm.setValue({
        title: data.title,
        category: data.category,
        resum: data.resum,
        content: data.content,
        link: data.link
      });
    });
  }

  savePost() {
    if(this.editMode) {
      this.postService.updatePost(this._id, this.postForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/posts'))
        }, (error) => {
          console.log(error);
        });
    } else {
      if (!this.postForm.valid) {
        return false;
      } else {
        this.postService.createPost(this.postForm.value).subscribe(
          (res) => {
            this.ngZone.run(() => this.router.navigateByUrl('/posts'))
          }, (error) => {
            console.log(error);
          });
      }
    }

  }

}
