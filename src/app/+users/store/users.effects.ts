import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, delay } from 'rxjs'
import { UsersService } from '../services/users.services'
import * as actions from './users.actions'

@Injectable()
export class UsersEffect {
  loadUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actions.loadUsers),
      switchMap((action) =>
        this._usersService.getUsers(action.page, action.limit).pipe(
          map((result) => actions.loadUsersSuccess({ response: result.body })),
          catchError(() =>
            of(
              actions.loadUsersFail({
                error: new Error('Something went wrong').message,
              })
            )
          )
        )
      ),
      delay(550)
    )
  )
  constructor(
    private _actions$: Actions,
    private _usersService: UsersService
  ) {}
}
