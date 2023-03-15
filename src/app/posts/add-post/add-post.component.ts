import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPostComponent implements OnInit {
  isDirty = false;
  isDirty$ = new Subject<boolean>();
  imagePreview: string;
  form: FormGroup;
  editMode = false;
  id: string;
  selectedPost: Post;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] != null;
      this.id = params['id'];
      this.initForm();
    });
  }

  private initForm() {
    this.form = this.fb.group({
      title: ['Man seating in the bus', Validators.required],
      tags: this.fb.array([]),
      content: ['', Validators.required],
      image_url: [
        'https://cdn.pixabay.com/photo/2023/02/28/03/31/man-7819801_1280.jpg',
        Validators.required
      ],
      author: ['sorin', Validators.required],
      email: ['email@mail.com', [Validators.required, Validators.email]]
    });

    if (this.editMode) {
      this.selectedPost = this.postService.getPost(this.id);
      console.log(this.selectedPost);
      this.form = this.fb.group({
        title: this.selectedPost.title,
        tags: this.fb.array(this.selectedPost.tags),
        content: this.selectedPost.content,
        image_url: this.selectedPost.image_url,
        author: this.selectedPost.author,
        email: this.selectedPost.email
      });
    }
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

  getTags() {
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
