export * from '@model/model';
export * from '@model/model.collection';

import { ModelCollection } from '@model/model.collection';

import { userModel } from '@model/user.model';
import { sampleModel } from '@model/sample.model';


export const models = new ModelCollection();
models.add(userModel);
models.add(sampleModel);
