import {DefaultComponent} from '../components/default/default.component';
import {ContainerComponent} from '../components/container/container.component';
import {FormGroupComponent} from '../components/form-group/form-group.component';
import {Injectable} from '@angular/core';
import {InputComponent} from "../components/input/input.component";
import {SegmentedComponent} from "../components/segmented/segmented.component";

@Injectable()
export class ComponentRegistry {
  private components: { [type: string]: any } = {};
  private defaultComponent = DefaultComponent;

  constructor() {
    this.registerComponentType('default', DefaultComponent);
    this.registerComponentType('GridContainer', ContainerComponent);
    this.registerComponentType('FormGroup', FormGroupComponent);
    this.registerComponentType('TextField', InputComponent);
    this.registerComponentType('Segmented', SegmentedComponent);

  }

  setDefaultComponent(component: any) {
    this.defaultComponent = component;
  }

  getDefaultComponent() {
    return this.defaultComponent;
  }

  hasComponent(type: string) {
    return this.components.hasOwnProperty(type);
  }

  registerComponentType(type: string, component: any) {
    this.components[type] = component;
  }

  getComponentType(type: string): any {
    if (this.hasComponent(type)) {
      return this.components[type];
    }
    return this.defaultComponent;
  }
}
