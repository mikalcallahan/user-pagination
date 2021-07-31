import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { tap } from 'rxjs'
import * as actions from './users.actions'

@Injectable()
export class UsersEffect {
  loadUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actions.loadUsers),
      tap(() => console.log('load users'))
    )
  )
  constructor(private _actions$: Actions) {}
}
