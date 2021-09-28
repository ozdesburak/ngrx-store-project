import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { PasswordStrengthValidator } from '../password-strength.validators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}";
  form: FormGroup;
  Observer: { next: (user: User) => Promise<boolean>; error: (err: any) => void; };
  subscription: Subscription;
  formSubmitted = false;

  constructor(
    private authService:AuthService,
    private route:Router,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm();
  }
  

  register(){
    this.formSubmitted = true;

   
        const observer={next: (user: User) => (
        this.route.navigate(['/login'])
        ),
          error: (err: any) => console.log(err)
        }   
   
        if(this.form.valid) this.subscription =this.authService.register(this.form.value).subscribe(observer)

  }


  
  private registerForm(){
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ["", Validators.compose([Validators.required, Validators.maxLength(250), Validators.pattern(this.emailPattern)])],
      password: ["", [Validators.required, PasswordStrengthValidator]],

    });
  }

  validationErrorExists() {
    return ((this.formSubmitted || this.form.dirty) && !this.form.valid);
  }
  
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
