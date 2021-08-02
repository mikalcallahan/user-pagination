import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { UsersModule } from './+users/users.module'
import { UsersEffect } from './+users/store/users.effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { SharedModule } from './shared/shared.module'
import { environment } from '../environments/environment'
import { reducers } from '.';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([UsersEffect]),
    StoreModule.forRoot(reducers),
    SharedModule,
    UsersModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
