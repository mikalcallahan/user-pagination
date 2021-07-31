import { Component } from '@angular/core'
import * as actions from '../store/users.actions'
@Component({
  selector: 'users',
  templateUrl: 'users.container.html',
})
export class UsersContainer {
  public ngOnInit(): void {
    actions.loadUsers()
  }
}
