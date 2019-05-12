import { Component, Input } from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  @Input() field = null;
  role = Role;
  constructor(public fs: FormsService) { }
}
