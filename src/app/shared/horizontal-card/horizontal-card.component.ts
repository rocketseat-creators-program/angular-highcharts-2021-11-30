import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent {

  @Input()
  title?: string;

  @Input()
  titleMuted?: string | null;

  @Input()
  body?: string;

  @Input()
  img?: string;

  @Input()
  style?: string;

  @Input('class')
  clazz?: string;

  @Input()
  canEdit = false;

  @Input()
  canDelete = false;

  @Output('edit')
  onEdit = new EventEmitter();

  @Output('delete')
  onDelete = new EventEmitter();

  constructor() { }

  get class() {
    return this.clazz ? this.clazz.split(" ") : '';
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDeleteClick() {
    this.onDelete.emit();
  }

}
