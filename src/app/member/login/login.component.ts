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

  form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private store: Store) {
      this.loginForm();
     }

  ngOnInit(): void {

   

  }


  private loginForm(){
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.store.dispatch(fromAuthActions.loginPage(this.form.value));
  }

  

}
