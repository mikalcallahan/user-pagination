import {
  animate,
  style,
  transition,
  trigger,
  query,
  stagger,
} from '@angular/animations'

export const staggerAnimation = trigger('staggerAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('500ms', animate('700ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
])
