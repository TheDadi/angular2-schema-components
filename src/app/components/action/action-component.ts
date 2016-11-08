import {BaseComponent} from '../base/base.component';
import {Renderer, ElementRef, OnInit, EventEmitter} from '@angular/core';
import {InteractionService} from '../../shared/interaction-service';
import {Output} from '@angular/core/src/metadata/directives';
import {InteractionEvent} from '../../models/InteractionEvent';

export class ActionComponent extends BaseComponent implements OnInit {

  actions: Array<string>;


  constructor(private renderer: Renderer, private elementRef: ElementRef, private interactionService: InteractionService) {
    super()
  }

  ngOnInit(): void {
    this.actions
      .map((event: string) => {
        return event.substring(2);
      })
      .forEach((eventName)=> {
        this.renderer.listen(this.elementRef.nativeElement, eventName, () => {
            this.interactionService.actionEvent.emit(
              new InteractionEvent(
                this.id,
                eventName
              )
            )
          }
        )
      });
  }
}
