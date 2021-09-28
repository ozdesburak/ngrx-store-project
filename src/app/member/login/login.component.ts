import { Component, OnInit } from '@angular/core';
import * as fromAuthActions from 'src/app/store/actions/auth.actions'
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formSubmitted = false;
  form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private store: Store) {
      this.loginForm();
     }

  ngOnInit(): void {}


  private loginForm(){
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    //
      if(this.form.valid){
        this.store.dispatch(fromAuthActions.loginPage(this.form.value));
      }
  }

  validationErrorExists() {
    return ((this.formSubmitted || this.form.dirty) && !this.form.valid);
  }
  
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
