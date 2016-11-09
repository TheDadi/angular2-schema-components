import {Component, OnInit} from '@angular/core';
import {ContainerLikeComponent} from '../container-like/container-like.component';
import {ComponentFactoryService} from '../../shared/component-factory';

@Component({
  selector: 'axa-form',
  templateUrl: 'form.component.html'
})
export class FormComponent extends ContainerLikeComponent {
  constructor(){
    super()
  }

}
