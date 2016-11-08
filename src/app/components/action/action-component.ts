import {BaseComponent} from '../base/base.component';
import {Renderer, ElementRef, OnInit, EventEmitter} from '@angular/core';
import {InteractionService} from '../../shared/interaction-service';
import {Output} from '@angular/core/src/metadata/directives';

export class ActionComponent extends BaseComponent implements OnInit {

  @Output() actionTriggered = new EventEmitter();

  actions: Array<string>;


  constructor(private renderer: Renderer, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.actions
      .map((event: string) => {
        event.substring(2);
      })
      .forEach((eventName)=> {
          this.renderer.listen(this.elementRef.nativeElement, eventName, () => {
            this.actionTriggered.emit({
              id: this.id,
              event: eventName
            })
          })
        }
      )
  }
}
