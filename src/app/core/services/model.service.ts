import { Injectable } from '@angular/core';

import { Model } from '@model/model';
import { ModelCollection, models } from '@model/model.collection';

@Injectable()
export class ModelService {
  models: ModelCollection;

  constructor() {
    this.models = models;
  }
  get(): Model[] {
    console.log(this.models);
    return this.models.get();
  }
}
