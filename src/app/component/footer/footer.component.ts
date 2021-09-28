import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromLangActions from 'src/app/store/actions/lang.actions'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selectedLang:any
  langue: any[] = [
    {value: 'tr', viewValue: 'Türkçe'},
    {value: 'en', viewValue: 'English'},
  ];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('lang') || 'tr'
  }

  changeLang(lang) {
    this.store.dispatch(fromLangActions.LangSuccess({lang_key:lang}));
    history.go(0)
  }

}
