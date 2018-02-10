import { Component } from '@angular/core';
import { ConfigService } from './core/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiResources = [
    'Resource A',
    'Resource B',
  ];

  constructor(public meta: ConfigService) {}
}
