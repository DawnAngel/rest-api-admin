import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { appRoutes } from '@app/app-routing.module';
import { ResourceModule } from '@app/resource/resource.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(appRoutes),
    ResourceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
