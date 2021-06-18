import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HandGestureService } from 'tensorflow-web-gesture';

@Component({
  selector: 'smart-tv-example-loading-app-view',
  templateUrl: './loading-app-view.component.html',
  styleUrls: ['./loading-app-view.component.css'],
})
export class LoadingAppViewComponent {
  readonly name: string | null;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private handGestureService: HandGestureService,
    private location: Location
  ) {
    this.name = this._Activatedroute.snapshot.paramMap.get('app-name');

    this.handGestureService.subscribers.left.subscribe(() => {
      this.location.back();
    });
  }
}
