import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { appRoutes } from '@app/app-routing.module';
import { ResourceModule } from '@app/resource/resource.module';
import { ModelService } from '@app/core/services/model.service';
import { ConfigService } from '@app/core/services/config.service';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    ResourceModule,
  ],
  providers: [
    ConfigService,
    ModelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
