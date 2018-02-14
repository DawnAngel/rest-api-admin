import { Model } from '@model/model';

export class ModelCollection {
  private collection: Map<string, Model> = new Map();

  add(model: Model) {
    this.collection.set(model.id, model);
  }

  get(id: string): Model {
    return this.collection.get(id);
  }

  getAll(): Iterable<Model> {
    return this.collection.values();
  }

  getIds(): Iterable<string> {
    return this.collection.keys();
  }
}
