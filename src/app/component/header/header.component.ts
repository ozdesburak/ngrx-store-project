import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { logout } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;
  

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getUser();
    
  }


  getUser(){
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );   
  }
  logout() {
    this.store.dispatch(logout());
  }

  

}
