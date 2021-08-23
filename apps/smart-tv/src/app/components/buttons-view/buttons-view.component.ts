import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HandGestureService } from 'tensorflow-web-gesture';
@Component({
  selector: 'smart-tv-example-buttons-view',
  templateUrl: './buttons-view.component.html',
  styleUrls: ['./buttons-view.component.css'],
})
export class ButtonsViewComponent implements OnDestroy {
  applications = [
    'twitch',
    'youtube',
    'movistar',
    'dazn',
    'atresplayer',
    'spotify',
    'google',
    'facebook',
    'imdb',
    'dezeer',
    'sky',
    'euro',
  ];
  private subscritors = new Array<Subscription>();

  index = -1;

  constructor(public handGestureService: HandGestureService, router: Router) {
    this.index = -1;
    this.subscritors.push(
      handGestureService.subscribers.right$.subscribe(() => {
        this.index = (this.index + 1) % this.applications.length;
      })
    );
    this.subscritors.push(
      handGestureService.subscribers.left$.subscribe(() => {
        if (this.index < 1) this.index = this.applications.length - 1;
        else this.index = (this.index - 1) % this.applications.length;
      })
    );
    this.subscritors.push(
      handGestureService.subscribers.ok$.subscribe(() => {
        if (this.index > -1)
          router.navigate(['/app/' + this.applications[this.index]]);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscritors.forEach((s) => s.unsubscribe());
  }
}
