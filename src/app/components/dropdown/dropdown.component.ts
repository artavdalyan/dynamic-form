import { Component, Input, OnInit } from '@angular/core';
import {getID} from '../../helpers/idGenerator';
import { FormsService, Role } from '../../services/forms.service';
class DropDown {
  id: number;
  label: string;
  selected = false;
  constructor(data) {
    Object.assign(this, data);
  }
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() isEdit = true;
  @Input() field = null;
  dropdown: Array<DropDown> = [];
  role = Role;

  constructor(private fs: FormsService) {
  }
  ngOnInit(): void {
    this.dropdown = this.field.options || this.dropdown;
    if (this.role.Edit === this.fs.role) {
      this.addCheckbox();
    }
  }
  addCheckbox() {
    let id = this.dropdown.length;
    this.field.options = this.dropdown = [...this.dropdown, new DropDown({
      id: getID(),
      label: `Option ${++id}`
    })];
  }

  delete(id: number | string) {
    this.field.options = this.dropdown = this.dropdown.filter((checkbox: DropDown) => checkbox.id !== id);
  }

}
