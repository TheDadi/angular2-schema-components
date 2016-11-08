import {
  ViewContainerRef,
  ComponentRef,
  Injectable, ComponentFactoryResolver
} from "@angular/core";

import {ComponentRegistry} from './component-registry';

@Injectable()
export class ComponentFactoryService {

  private resolver: ComponentFactoryResolver;
  private registry: ComponentRegistry;

  constructor(registry: ComponentRegistry, resolver: ComponentFactoryResolver) {
    this.registry = registry;
    this.resolver = resolver;
  }

  createComponent(container: ViewContainerRef, type: string): ComponentRef<any>  {

        let componentClass = this.registry.getComponentType(type);
        let componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);

  }
}
