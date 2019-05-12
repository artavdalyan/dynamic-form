import { Component, Input } from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  @Input() field = null;
  role = Role;
  constructor(public fs: FormsService) { }

}
