import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersContainer } from './containers'
import { UserListComponent } from './components'
import { EffectsModule } from '@ngrx/effects'
import { UsersEffect } from './store/users.effects'
import { StoreModule } from '@ngrx/store'
import * as fromUsers from './store/users.reducer'

@NgModule({
  declarations: [UsersContainer, UserListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.usersReducer),
    EffectsModule.forFeature([UsersEffect]),
  ],
  exports: [UsersContainer, UserListComponent],
})
export class UsersModule {}
