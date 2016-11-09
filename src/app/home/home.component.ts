import {Component, OnInit} from '@angular/core';
import {ComponentFactoryService} from '../shared/component-factory';
import {ContainerLikeComponent} from '../components/container-like/container-like.component';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ContainerLikeComponent {

  children = [{
    "type": "GridContainer",
    "children": [{
      "type": "FormGroup",
      "children": [{
        "type": "Segmented",
        "id": "/0/6/0/5/7/14/14/20/20",
        "name": "data.role",
        "actions": ["onchange"],
        "selectedOptionId": "versicherungsnehmer",
        "options": [{"id": "versicherungsnehmer", "label": "Versicherungsnehmer"}, {
          "id": "garage",
          "label": "Garage"
        }]
      }],
      "label": "Rolle"
    }, {
      "type": "FormGroup",
      "children": [{"type": "TextField", "id": "/0/6/0/5/7/8/2/2/3/3", "name": "data.name", "value": "abc"}],
      "label": "Vorname, Nachname/Firma"
    }, {
      "type": "FormGroup",
      "children": [{"type": "TextField", "id": "/0/6/0/5/7/8/4/4/5/5", "name": "data.phone"}],
      "label": "Telefonnummer"
    }, {
      "type": "FormGroup",
      "children": [{"type": "TextField", "id": "/0/6/0/5/7/8/17/17/19/19"}],
      "label": "testInput"
    }, {"type": "Button", "id": "/0/6/0/7/3/3", "name": "next", "actions": ["onclick"], "label": "Next"}]
  }];


  constructor() {
    super()
  }
}
