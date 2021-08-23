import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HandGestureService } from 'tensorflow-web-gesture';

@Component({
  selector: 'smart-tv-example-wellcome-view',
  templateUrl: './wellcome-view.component.html',
  styleUrls: ['./wellcome-view.component.css'],
})
export class WellcomeViewComponent implements OnDestroy {
  private router: Router;
  private subscritors = new Array<Subscription>();

  constructor(router: Router, handGestureService: HandGestureService) {
    this.router = router;
    this.subscritors.push(
      handGestureService.subscribers.ok$.subscribe(() => {
        router.navigate(['/buttons']);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscritors.forEach((s) => s.unsubscribe());
  }
  start() {
    this.router.navigate(['/buttons']);
  }
}
