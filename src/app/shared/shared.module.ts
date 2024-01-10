import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    }
  }
}
