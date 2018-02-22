import { NgModule } from '@angular/core';

import { ConfigService } from './services/config.service';
import { ModelService } from './services/model.service';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    ConfigService,
    ModelService,
  ],
})
export class CoreModule { }
