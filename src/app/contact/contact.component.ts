import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../store';
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import * as fromLangSelectors from 'src/app/store/selectors/lang.selectors';
import { User } from '../models/auth';
import * as fromContactActions from 'src/app/store/actions/contact.actions'
import { CountryList } from '../models/countryList';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  private userStore$: Subscription;
  user:User
   countryList 
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}";

  formSubmitted: boolean = false;
  lang: string

  constructor(private store: Store<AppState>, private readonly fb: FormBuilder, private utilService:UtilService) { 
    this.getLoginUser()
    this.contactForm()

  }

  ngOnInit(): void {

    this.countryList = this.utilService.getCountry(this.lang)
    console.log('loggg', this.countryList);
    
    
  }

  ngOnDestroy(): void {
    this.userStore$?.unsubscribe();
  }


  getLoginUser(){
    this.userStore$ = this.store.select(fromAuthSelectors.selectUser)
      .subscribe((user) => {
        this.user = user        
      });
    this.userStore$ = this.store.select(fromLangSelectors.selectLangState)
      .subscribe((lang) => {
        this.lang = lang.lang        
        console.log('asddd', lang);
        
      });
  }

  private contactForm(){
    
    this.form = this.fb.group({
      username: [this.user?.name ?? '', Validators.required],
      mail: [this.user?.email ?? '', [Validators.required, , Validators.pattern(this.emailPattern)]],
      country: ['', Validators.required],
      subject: ['', Validators.required],
      
    });
  }
  
  onSubmit() {
    this.formSubmitted = true;
    console.log(this.form.value);
    
     if(this.form.valid)this.store.dispatch(fromContactActions.contactCreatePage(this.form.value));
  }

  validationErrorExists() {
    return ((this.formSubmitted || this.form.dirty) && !this.form.valid);
  }
  
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
