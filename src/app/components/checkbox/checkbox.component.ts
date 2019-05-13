import { Component, Input, OnInit } from '@angular/core';
import { getID } from '../../helpers/idGenerator';
import { FormsService, Role } from '../../services/forms.service';

class Checkbox {
  id: number;
  label: string;
  checked = false;
  constructor(data) {
    Object.assign(this, data);
  }
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() isEdit = false;
  @Input() field = null;
  checkboxes: Array<Checkbox> = [];
  role = Role;

  constructor(public fs: FormsService) {
  }

  ngOnInit() {
    this.checkboxes = this.field.options || this.checkboxes;
    if (this.role.Edit === this.fs.role) {
      this.addCheckbox();
    }
  }

  addCheckbox() {
    let id = this.checkboxes.length;
    this.field.options = this.checkboxes = [...this.checkboxes, new Checkbox({
      id: getID(),
      label: `Option ${++id}`
    })];
  }

  delete(id: number | string) {
    this.field.options = this.checkboxes = this.checkboxes.filter((checkbox: Checkbox) => checkbox.id !== id);
  }
}
