import { Model } from '@model/model';
import { userModel } from '@model/user.model';

export class ModelCollection {
  constructor(private collection: Model[] = []) {}

  get() {
    return this.collection;
  }
}

export const models = new ModelCollection([
  userModel,
]);
