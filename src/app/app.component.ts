import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { User } from './models/auth';
import { AppState } from './store';
import { browserReload } from './store/actions/auth.actions';
import * as fromLangActions from 'src/app/store/actions/lang.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  constructor(
    private store: Store<AppState>,
    private  translateService: TranslateService
  ) {

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang')  || 'en')
    this.store.dispatch(fromLangActions.LangSuccess({lang_key:localStorage.getItem('lang')  || 'en'}))

  }

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(browserReload({ user: user }));
    }
  }
}

