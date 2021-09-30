import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  private userStore$: Subscription;
  user: import("/Users/burakozdes/Documents/ProjeSon/rxjsExample-1/src/app/models/auth").User;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getUser();
    this.getLoginUser();
    
  }


  getUser(){
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );   
  }
  logout() {
    this.store.dispatch(logout());
  }

  getLoginUser(){
    this.userStore$ = this.store.select(fromAuthSelectors.selectUser)
      .subscribe((user) => {
        this.user = user        
      });
  }

   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
