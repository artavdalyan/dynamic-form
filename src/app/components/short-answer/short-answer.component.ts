import { Component, Input} from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.scss']
})
export class ShortAnswerComponent {
  @Input() field = null;
  role = Role;
  constructor(public fs: FormsService) {
  }

}
