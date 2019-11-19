import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { timer } from 'rxjs';

import { NotificationService } from '../../../data-access/rest/notificationService/notification.service';

@Component({
  selector: 'snackbar-cdm',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidder', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
 
    this.notificationService.notifier.subscribe(msg => {
      this.message = msg;
      this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden';
      const souce = timer(9000);
      souce.subscribe(timer => this.snackVisibility = 'hidden')
    })
  }

}
