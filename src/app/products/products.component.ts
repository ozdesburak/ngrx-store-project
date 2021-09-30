import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { UtilService } from '../services/util.service';
import * as fromLangSelectors from 'src/app/store/selectors/lang.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  lang: string;

  constructor(private utilService:UtilService, private store: Store<AppState>) { }

  cardJson:Card

  ngOnInit(): void {
    this.getLang();
    this.cardJson = <Card>this.utilService.getCard(this.lang);
  }
  

  getLang(){
    this.store.select(fromLangSelectors.selectLangState)
      .subscribe((lang) => {
        this.lang = lang.lang  
      });
  }

}
