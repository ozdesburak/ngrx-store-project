import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../store';
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import { User } from '../models/auth';
import * as fromContactActions from 'src/app/store/actions/contact.actions'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  private userStore$: Subscription;
  user:User
   countryList = [
    { id: "TR", name: "Turkey" },
    { id: "US", name: "United States of America" },
    { id: "GB", name: "United Kingdom" },
    { id: "DE", name: "Germany" },
    { id: "SE", name: "Sweden" },
    { id: "KE", name: "Kenya" },
    { id: "BR", name: "Brazil" },
    { id: "ZW", name: "Zimbabwe" }
  ]

  constructor(private store: Store<AppState>, private readonly fb: FormBuilder,) { 
    this.getLoginUser()
    this.contactForm()

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.userStore$?.unsubscribe();
  }


  getLoginUser(){
    this.userStore$ = this.store.select(fromAuthSelectors.selectUser)
      .subscribe((user) => {
        this.user = user        
      });
  }

  private contactForm(){
    console.log(this.user?.email);
    
    this.form = this.fb.group({
      username: [this.user?.name ?? '', Validators.required],
      mail: [this.user?.email ?? '', Validators.required],
      country: ['', Validators.required],
      subject: ['', Validators.required],
      
    });
  }
  
  onSubmit() {
    console.log(this.form.value);
    this.store.dispatch(fromContactActions.contactCreatePage(this.form.value));
  }

}
