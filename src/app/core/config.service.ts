import { Injectable } from '@angular/core';

import { Config, IConfig } from '@model/config';

@Injectable()
export class ConfigService {
  cfg: IConfig;

  constructor() {
    this.cfg = new Config();
  }

}
