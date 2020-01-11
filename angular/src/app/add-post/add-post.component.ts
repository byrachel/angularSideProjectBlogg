import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  submitted = false;
  defaultCategory = 'Framework';

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router,
              private ngZone: NgZone) {
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

  addPost() {
    this.submitted = true;
    if (!this.postForm.valid) {
      return false;
    } else {
      this.postService.createPost(this.postForm.value).subscribe(
        (res) => {
          console.log('Le post est créé!')
          this.ngZone.run(() => this.router.navigateByUrl('/posts'))
        }, (error) => {
          console.log(error);
        });
    }
  }

  ngOnInit() {
  }

}
