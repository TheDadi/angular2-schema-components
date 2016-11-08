import {Component, OnInit} from '@angular/core';
import {ContainerLikeComponent} from '../container-like/container-like.component';
import {ComponentFactoryService} from '../../shared/component-factory';

@Component({
  selector: 'form-group',
  templateUrl: 'form-group.component.html'
})
export class FormGroupComponent extends ContainerLikeComponent {
  constructor(protected componentFactoryService: ComponentFactoryService) {
    super(componentFactoryService)
  }

}
