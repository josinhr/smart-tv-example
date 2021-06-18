import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HandGestureService } from 'tensorflow-web-gesture';

@Component({
  selector: 'smart-tv-example-wellcome-view',
  templateUrl: './wellcome-view.component.html',
  styleUrls: ['./wellcome-view.component.css'],
})
export class WellcomeViewComponent {
  private router: Router;
  constructor(router: Router, handGestureService: HandGestureService) {
    this.router = router;
    handGestureService.subscribers.ok.subscribe(() => {
      router.navigate(['/buttons']);
    });
  }
  start() {
    this.router.navigate(['/buttons']);
  }
}
