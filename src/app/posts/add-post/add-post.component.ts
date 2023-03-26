import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '@shared/post.model';
import { Observable, Subject } from 'rxjs';
import { HttpService } from '../http.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],

})
export class AddPostComponent implements OnInit {
  isDirty = false;
  isDirty$ = new Subject<boolean>();
  imagePreview: string;
  editMode = false;
  id: string;
  selectedPost: Post;

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private httpService: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] != null;
      this.id = params['id'];
    });
    this.initForm();
  }



  private initForm() {
    let title = 'Man seating in the bus'
    // eslint-disable-next-line prefer-const
    let tags = this.fb.array([])
    let content = 'content'
    let image_url = 'https://cdn.pixabay.com/photo/2023/02/28/03/31/man-7819801_1280.jpg'
    let author = 'sorin'
    let email = 'email@mail.com'

    if (this.editMode) {
      this.selectedPost = this.postService.getPost(this.id)
      title = this.selectedPost.title
      this.selectedPost.tags.forEach(tag => {
        tags.push(new FormControl(tag, Validators.required))
      })
      content = this.selectedPost.content
      image_url = this.selectedPost.image_url || 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
      author = this.selectedPost.author
      email = this.selectedPost.email


    }

    this.form = this.fb.group({
      title: [title, Validators.required],
      tags: tags,
      content: [content, Validators.required],
      image_url: [
        image_url,
        Validators.required
      ],
      author: [author, Validators.required],
      email: [email, [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    this.isDirty = false;
    if (this.form.valid && !this.editMode) {
      this.postService.addPost(this.form.value);
      this.isDirty$.next(true);
    }
    if (this.form.valid && this.editMode) {
      this.postService.editPost(this.id, this.form.value);
      this.isDirty$.next(true);
    }
  }

  addTag() {
    const control = new FormControl('', [Validators.required]);
    (<FormArray>this.form.get('tags')).push(control);
  }

  get getTags() {
    return (<FormArray>this.form.get('tags')).controls;
  }

  onHandleAlert($event: boolean) {
    this.isDirty = $event;
    this.isDirty$.next($event);
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    this.isDirty = this.form.dirty;
    if (!this.form.dirty) {
      return true;
    }
    return this.isDirty$.asObservable();
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
