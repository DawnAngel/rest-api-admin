import { Injectable } from '@angular/core';

import { Model, models } from '@model/index';

@Injectable()
export class ModelService {
  get(id: string): Model {
    return models.get(id);
  }

  has(id: string): boolean {
    return models.has(id);
  }

  getAll(): Model[] {
    return Array.from(models.getAll());
  }

  getIds(): string[] {
    return Array.from(models.getIds());
  }

  iterAll(): Iterable<Model> {
    return models.getAll();
  }

  iterIds(): Iterable<string> {
    return models.getIds();
  }

}
