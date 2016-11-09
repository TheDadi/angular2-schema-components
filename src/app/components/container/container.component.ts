import {Component, Inject} from '@angular/core';
import {ContainerLikeComponent} from '../container-like/container-like.component';
import {ComponentFactoryService} from '../../shared/component-factory';

@Component({
  selector: 'container',
  templateUrl: 'container.component.html',
})
export class ContainerComponent extends ContainerLikeComponent{
  constructor(){
    super()
  }
}
