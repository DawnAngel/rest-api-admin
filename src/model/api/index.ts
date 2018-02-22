import { ModelCollection } from '@model/model.collection';

import { userModel } from '@model/api/user.model';
import { sampleModel } from '@model/api/sample.model';


export function getModels(): ModelCollection {
  const models = new ModelCollection();
  models.add(userModel);
  models.add(sampleModel);

  return models;
};
