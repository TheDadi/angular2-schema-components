import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import {ComponentFactoryService} from './shared/component-factory';
import {ComponentRegistry} from './shared/component-registry';
import {ContainerComponent} from './components/container/container.component';
import {DefaultComponent} from './components/default/default.component';
import {FormComponent} from './components/form/form.component';
import {FormGroupComponent} from './components/form-group/form-group.component';
import {InteractionService} from './shared/interaction-service';
import {ContainerLikeComponent} from './components/container-like/container-like.component';
import {ActionComponent} from './components/action/action-component';
import {DynamicContainerComponent} from "./components/dynamic-container/dynamic-container.component";
import {InputComponent} from "./components/input/input.component";
import {SegmentedComponent} from "./components/segmented/segmented.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicContainerComponent,
    ContainerComponent,
    DefaultComponent,
    FormGroupComponent,
    InputComponent,
    SegmentedComponent

  ],
  entryComponents:[
    DynamicContainerComponent,
    ContainerComponent,
    FormGroupComponent,
    DefaultComponent,
    InputComponent,
    SegmentedComponent
  ],
  providers: [
    ComponentFactoryService,
    InteractionService,
    ComponentRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
