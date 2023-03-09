import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  imagePreview: string;

  form: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['Man seating in the bus', Validators.required],
      tags: this.fb.array(['Transport', 'Vietnam']),
      content: ['content', Validators.required],
      image_url: [
        'https://cdn.pixabay.com/photo/2023/02/28/03/31/man-7819801_1280.jpg',
        Validators.required
      ],
      author: ['sorin', Validators.required],
      email: ['email@mail.com', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    this.postService.addPost(this.form.value);
  }
  addTag() {
    const control = new FormControl('', [Validators.required]);
    (<FormArray>this.form.get('tags')).push(control);
  }

  get getTags() {
    return this.form.controls['tags'] as FormArray;
  }

  onFilePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image_url: file });
    this.form.get('image_url').updateValueAndValidity();
    this.imagePreview = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
