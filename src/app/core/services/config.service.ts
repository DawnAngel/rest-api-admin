import { Injectable } from '@angular/core';

import { IConfig } from 'model/config.interface';
import { Config } from 'model/config';

@Injectable()
export class ConfigService {
  cfg: IConfig;

  constructor() {
    this.cfg = new Config();
  }
}
