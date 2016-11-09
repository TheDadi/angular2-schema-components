import {Component, Inject, ViewContainerRef, ComponentRef, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ComponentFactoryService} from '../../shared/component-factory';
import {ContainerLikeComponent} from '../container-like/container-like.component';

@Component({
  selector: 'dynamic-container',
  templateUrl: 'dynamic-container.component.html',
})
export class DynamicContainerComponent extends BaseComponent implements OnInit{


  @Input() children:Array<any>;

  constructor(private viewContainer:ViewContainerRef, private componentFactoryService:ComponentFactoryService) {
    super()

  }

  ngOnInit():void {
    this.children.forEach((component) => {
      let ref:ComponentRef<any> = this.componentFactoryService.createComponent(this.viewContainer, component.type)
      Object.assign(ref.instance, component);
    });
  }

}
