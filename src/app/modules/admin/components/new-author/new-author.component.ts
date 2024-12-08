import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthorModel } from '@/models';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrl: './new-author.component.scss'
})
export class NewAuthorComponent implements OnDestroy {
  subscriptions = new Subscription();
  errorMessage?: string;
  submitted = false;

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]]
  });

  get firstName() {
    return this.form.get('firstName') as FormControl;
  }

  get lastName() {
    return this.form.get('lastName') as FormControl;
  }

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  handleSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.createAuthor(this.form.value as AuthorModel)
    }
  }

  private createAuthor(author: AuthorModel): void {
    this.subscriptions.add(
      this.adminService.createAuthor(author).subscribe({
        next: (newAuthor) => {
          console.log('Author created', newAuthor);
          this.router.navigate(['..'], {
            relativeTo: this.route
          });
        },
        error: (error) => this.errorMessage = error.message
      })
    );
  }
}
