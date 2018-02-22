import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from './md/md.module';

const imports = [
  CommonModule,
  MaterialDesignModule,
];

@NgModule({
  imports: [
    ...imports
  ],
  exports: [
    ...imports
  ],
})
export class SharedModule { }
