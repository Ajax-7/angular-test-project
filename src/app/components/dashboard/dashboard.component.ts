import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state';

@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent implements OnInit {
  current$: Observable<number>;
  message = 'To create a new nav tab:';
  by$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
}
