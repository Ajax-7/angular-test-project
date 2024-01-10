import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouteSerializer } from '../shared/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouteSerializer,
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
})
export class AppStateModule { }
