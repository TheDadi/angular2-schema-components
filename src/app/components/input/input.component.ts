import {Component, OnInit, ElementRef} from '@angular/core';
import {ComponentFactoryService} from '../../shared/component-factory';
import {ActionComponent} from "../action/action-component";
import {Renderer} from "typedoc/lib/output/renderer";
import {InteractionService} from "../../shared/interaction-service";

@Component({
  selector: 'axa-input',
  templateUrl: 'input.component.html'
})
export class InputComponent {
  constructor() {
  }

}
