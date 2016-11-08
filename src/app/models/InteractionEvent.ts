export class InteractionEvent {
  id: string;
  event: string;

  constructor(id: string, event: string) {
    this.id = id;
    this.event = event;
  }
}
