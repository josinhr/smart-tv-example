import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HandGestureService } from 'tensorflow-web-gesture';
import { Subscription } from 'rxjs';

@Component({
  selector: 'smart-tv-example-loading-app-view',
  templateUrl: './loading-app-view.component.html',
  styleUrls: ['./loading-app-view.component.css'],
})
export class LoadingAppViewComponent implements OnDestroy {
  readonly name: string | null;
  private subscritors = new Array<Subscription>();

  constructor(
    private _Activatedroute: ActivatedRoute,
    private handGestureService: HandGestureService,
    private location: Location
  ) {
    this.name = this._Activatedroute.snapshot.paramMap.get('app-name');
    this.subscritors.push(
      this.handGestureService.subscribers.left$.subscribe(() => {
        this.location.back();
      })
    );
  }
  ngOnDestroy(): void {
    this.subscritors.forEach((s) => s.unsubscribe());
  }
}
