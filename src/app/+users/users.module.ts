import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersContainer } from './containers'
import { UserListComponent } from './components'
import { EffectsModule } from '@ngrx/effects'
import { UsersEffect } from './store/users.effects'
import { StoreModule } from '@ngrx/store'
import { SharedModule } from 'src/app/shared/shared.module'
import { UsersService } from './services/users.services'
import * as fromUsers from './store/users.reducer'

@NgModule({
  declarations: [UsersContainer, UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    // StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.usersReducer),
    // EffectsModule.forFeature([UsersEffect]),
  ],
  exports: [UsersContainer, UserListComponent],
  providers: [UsersService],
})
export class UsersModule {}
