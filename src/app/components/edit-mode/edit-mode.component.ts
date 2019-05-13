import { Component } from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent {
  role = Role;
  constructor(public fs: FormsService) {
    this.fs.forms = [];
    this.fs.role = Role.Edit;
  }

  selectedTabChange({index}) {
    this.fs.role = index ? Role.Read : Role.Edit;
  }
}
