import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { ResourceComponent } from './resource.component';
import { MaterialDesignModule } from '@app/shared/md/md.module';

@NgModule({
  imports: [
    MaterialDesignModule,
  ],
  declarations: [ListComponent, ResourceComponent],
})
export class ResourceModule { }
