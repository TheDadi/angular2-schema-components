import {DefaultComponent} from '../components/default/default.component';

export class ComponentRegistry {
  private components: { [type: string]: any } = {};
  private defaultComponent = DefaultComponent;

  constructor() {
    this.registerComponentType("default", DefaultComponent);
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
