import { Component } from '@angular/core';

import { ConfigService } from './core/services/config.service';
import { ModelService } from './core/services/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiResources;

  constructor(public meta: ConfigService, private models: ModelService) {
    this.apiResources = models.getIds();
  }
}
