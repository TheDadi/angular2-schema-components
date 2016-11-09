import {BaseComponent} from '../base/base.component';
import {ViewContainerRef, ViewChild, OnInit, ComponentRef} from '@angular/core';
import {ComponentFactoryService} from '../../shared/component-factory';

export class ContainerLikeComponent extends BaseComponent {

  children:Array<any>;
}
