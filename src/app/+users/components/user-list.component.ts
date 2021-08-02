import { Component, Input } from '@angular/core'
import { isNil } from 'ramda'
import { User } from 'src/app/models'
import { staggerAnimation } from 'src/app/shared/animations'

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss'],
  animations: [staggerAnimation],
})
export class UserListComponent {
  @Input() users: User[]

  public ngOnInit(): void {
    this.users = isNil(this.users) ? [] : this.users
  }
}
