import { Component, Input } from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  @Input() field = null;
  @Input() isEdit = true;
  role = Role;

  constructor(public fs: FormsService) {
  }

}
