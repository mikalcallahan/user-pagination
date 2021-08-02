import {
  animate,
  style,
  transition,
  trigger,
  query,
  stagger,
} from '@angular/animations'
import { Component, Input } from '@angular/core'
import {isNil} from 'ramda'
import { User } from 'src/app/models'

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('450ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
])
const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('200ms ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
  ]),
])

const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0ms', style({ opacity: 0 })),
  ]),
])

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss'],
  animations: [listAnimation, fadeAnimation, slideAnimation],
})
export class UserListComponent {
  @Input() users: User[]

  public displayedColumns: string[] = ['id', 'name', 'email'];

  public ngOnInit(): void {
    this.users = isNil(this.users) ? [] : this.users
  }
}
