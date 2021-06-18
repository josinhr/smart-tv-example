import { AfterViewInit, Component } from '@angular/core';
import { HandGestureService } from 'tensorflow-web-gesture';

@Component({
  selector: 'smart-tv-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'smart-tv';
  public constructor(public handGestureService: HandGestureService) {}

  ngAfterViewInit(): void {
    const vid = <HTMLVideoElement>document.getElementById('videoElement');
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function success(streamReceived) {
        vid.srcObject = streamReceived;
      });
    this.handGestureService.init(vid);
  }
}
