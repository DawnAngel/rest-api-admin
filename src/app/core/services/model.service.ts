import { Injectable } from '@angular/core';

import { Model, ModelCollection, models } from '@model/index';

@Injectable()
export class ModelService {
  models: ModelCollection = models;

  get(id: string): Model {
    return this.models.get(id);
  }

  getAll(): Model[] {
    return Array.from(this.models.getAll());
  }

  getIds(): string[] {
    return Array.from(this.models.getIds());
  }

  iterAll(): Iterable<Model> {
    return this.models.getAll();
  }

  iterIds(): Iterable<string> {
    return this.models.getIds();
  }

}
