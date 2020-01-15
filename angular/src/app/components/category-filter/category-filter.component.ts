import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {
  categoryForm: FormGroup;
  category: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.categoryForm = new FormGroup({
      category: new FormControl()
    })
  }

  cForm() {
    this.categoryForm = this.formBuilder.group({
      category: ['']
    });
  }

  onCategorySelected(category: string) {
    this.category = this.categoryForm.value.category;
    this.router.navigate(['/post/api', this.category]);
    this.categoryForm.reset();
  }

}
