import { Component } from '@angular/core';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent {
  readonly = true;
  constructor(public fs: FormsService) {
  }
}
