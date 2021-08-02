import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, Observable } from 'rxjs'
import { AppState } from 'src/app'
import { Pagination, User } from 'src/app/models'

import * as actions from '../store/users.actions'
import * as fromUsers from '../store/users.selectors'

@Component({
  selector: 'users',
  templateUrl: 'users.container.html',
})
export class UsersContainer {
  public users$: Observable<User[]>
  public loading$: Observable<boolean>
  public error$: Observable<string>
  public paging$: Observable<Pagination>
  public currPage$: Observable<number>
  public perPage$: Observable<number>
  public length$: Observable<number>

  constructor(private _store: Store<AppState>) {
    this.users$ = this._store.pipe(select(fromUsers.getUsers))
    this.loading$ = this._store.pipe(select(fromUsers.getLoading))
    this.error$ = this._store.pipe(select(fromUsers.getError))
    this.paging$ = this._store.pipe(select(fromUsers.getPaging))
    this.perPage$ = this.paging$.pipe(
      map((paging) => (paging?.per_page ? paging.per_page : 6))
    )
    this.length$ = this.paging$.pipe(
      map((paging) => (paging?.total ? paging.total : 1))
    )
    this.currPage$ = this.paging$.pipe(
      map((paging) => (paging?.page ? paging.page : 1))
    )
  }

  public ngOnInit(): void {
    this._store.dispatch(actions.loadUsers({}))
  }

  public navigateToPage(page: number): void {
    this._store.dispatch(actions.loadUsers({ page }))
  }
}
