import { ActionReducerMap } from '@ngrx/store'
import * as users from './+users/store/users.reducer'

export interface AppState {
  users: users.UsersState
}

export const reducers: ActionReducerMap<AppState> = {
  users: users.usersReducer,
}
