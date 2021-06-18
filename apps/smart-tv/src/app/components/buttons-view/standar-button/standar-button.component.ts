import { Input, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smart-tv-example-standar-button',
  templateUrl: './standar-button.component.html',
  styleUrls: ['./standar-button.component.css'],
})
export class StandarButtonComponent {
  @Input() imageSource = '';

  constructor(public router: Router) {
    this.router = router;
  }

  startApp(imageSource: string) {
    this.router.navigate(['/app/' + imageSource]);
  }
}
