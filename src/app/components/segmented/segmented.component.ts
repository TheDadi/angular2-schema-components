import {Component, OnInit, ElementRef} from '@angular/core';
import {ComponentFactoryService} from '../../shared/component-factory';
import {ActionComponent} from "../action/action-component";
import {Renderer} from "typedoc/lib/output/renderer";
import {InteractionService} from "../../shared/interaction-service";
import {BaseComponent} from "../base/base.component";

@Component({
  selector: 'segmented',
  templateUrl: 'segmented.component.html'
})
export class SegmentedComponent extends BaseComponent {
  options:Array<any>

  constructor() {
  }

  onClick(){

  }
}
