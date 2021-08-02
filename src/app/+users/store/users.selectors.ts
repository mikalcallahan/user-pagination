import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromUsers from './users.reducer'

export const getState = createFeatureSelector<fromUsers.UsersState>(
  fromUsers.usersFeatureKey
)
export const getUsers = createSelector(getState, (state) => state.users)
export const getLoading = createSelector(getState, (state) => state.loading)
export const getError = createSelector(getState, (state) => state.error)
export const getPaging = createSelector(getState, (state) => state.paging)
