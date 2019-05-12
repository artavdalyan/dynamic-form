import { Component, Input } from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() field = null;
  role = Role;
  constructor(public fs: FormsService) {
  }
}
