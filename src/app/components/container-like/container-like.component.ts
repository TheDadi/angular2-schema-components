import {BaseComponent} from '../base/base.component';
import {ViewContainerRef, ViewChild, OnInit, ComponentRef} from '@angular/core';
import {ComponentFactoryService} from '../../shared/component-factory';

export class ContainerLikeComponent extends BaseComponent implements OnInit {

  children: Array<any>;

  @ViewChild("content", {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(protected componentFactoryService: ComponentFactoryService) {
    super()
  }

  ngOnInit(): void {
    this.children.forEach((component) => {
      let ref: ComponentRef<any> = this.componentFactoryService.createComponent(this.container, component.type)
      Object.assign(ref.instance, component);
    });
  }

}
