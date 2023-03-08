import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  NgControl,
  Validators
} from '@angular/forms';
import { map } from 'rxjs';
import { PostsService } from '../posts.service';
import { mimeType } from './mime-type.validator';

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
      title: ['title', Validators.required],
      tags: this.fb.array([]),
      content: ['content', Validators.required],
      image_url: ['', Validators.required],
      author: ['sorin', Validators.required],
      email: ['email@mail.com', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    //console.log(this.form.value.image_url.name);
    const {
      image_url: { name }
    } = this.form.value;
    const newPost = { ...this.form.value, image_url: name };
    this.postService.addPost(newPost);
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
