import { createAction, props } from '@ngrx/store'
import { UserResponse } from 'src/app/models/UserResponse'

export const loadUsers = createAction(
  '[Users] Load Users',
  props<{ page?: number; limit?: number }>()
)
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ response: UserResponse }>()
)
export const loadUsersFail = createAction(
  '[Users] Load Users Fail',
  props<{ error: string }>()
)
