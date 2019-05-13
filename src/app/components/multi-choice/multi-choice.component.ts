import { Component, Input, OnInit } from '@angular/core';
import {getID} from '../../helpers/idGenerator';
import { FormsService, Role } from '../../services/forms.service';

class MultiChoice {
  id: number;
  label: string;
  selected = false;
  constructor(data) {
    Object.assign(this, data);
  }
}
@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.scss']
})
export class MultiChoiceComponent implements OnInit{
  @Input() isEdit = false;
  @Input() field = null;
  checkboxes: Array<MultiChoice> = [];
  role = Role;

  constructor(public fs: FormsService) {
  }
  ngOnInit(): void {
    this.checkboxes = this.field.options || this.checkboxes;
    if (this.role.Edit  === this.fs.role) {
      this.addCheckbox();
    }
  }
  addCheckbox() {
    let id = this.checkboxes.length;
    this.field.options = this.checkboxes = [...this.checkboxes, new MultiChoice({
      id: getID(),
      label: `Option ${++id}`
    })];
  }

  delete(id: number | string) {
    this.field.options = this.checkboxes = this.checkboxes.filter((checkbox: MultiChoice) => checkbox.id !== id);
  }


}
