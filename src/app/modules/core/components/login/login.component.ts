import { Component, OnDestroy } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnDestroy {
  subscriptions = new Subscription();
  errorMessage?: string;
  submitted = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
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
      const { email, password } = this.form.value;
      this.login(email!, password!)
    }
  }

  private login(email: string, password: string): void {
    this.subscriptions.add(
      this.authService.connect(email, password).subscribe({
        next: (success) => {
          if (success) {
            const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';
            this.router.navigateByUrl(redirectUrl);
          } else {
            this.errorMessage = this.translate.instant('ERRORS.LOGIN');
          }
        },
        error: (error) => this.errorMessage = error.message
      })
    );
  }
}