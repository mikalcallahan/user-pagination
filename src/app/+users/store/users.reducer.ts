import { createReducer, on } from '@ngrx/store'
import { Pagination, User } from 'src/app/models'
import * as actions from './users.actions'

export interface UsersState {
  loading: boolean
  users: User[]
  error: string
  paging: Pagination
}

export const initialState: UsersState = {
  loading: undefined,
  users: undefined,
  error: undefined,
  paging: undefined,
}

export const usersReducer = createReducer(
  initialState,
  on(actions.loadUsers, (state) => ({ ...state, loading: true })),
  on(actions.loadUsersSuccess, (state, { response }) => {
    const users: User[] = response.data
    const paging: Pagination = {
      page: response.page,
      per_page: response.per_page,
      total: response.total,
      total_pages: response.total_pages,
    }
    return { ...state, loading: false, users, paging }
  }),
  on(actions.loadUsersFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
)

export const usersFeatureKey = 'users'
