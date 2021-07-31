import { createReducer, on } from '@ngrx/store'
import { User } from 'src/app/models'
import * as actions from './users.actions'

export interface UserState {
  loading: boolean
  users: User[]
}

export const initialState: UserState = {
  loading: undefined,
  users: undefined,
}

export const usersReducer = createReducer(
  initialState,
  on(actions.loadUsers, (state) => ({ ...state, loading: true }))
)

export const usersFeatureKey = 'users'
