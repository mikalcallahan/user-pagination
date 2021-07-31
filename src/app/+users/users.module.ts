import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainer } from './containers';
import { UserListComponent } from './components';

@NgModule({
  declarations: [UsersContainer, UserListComponent],
  imports: [CommonModule],
  exports: [UsersContainer, UserListComponent],
})
export class UsersModule {}
