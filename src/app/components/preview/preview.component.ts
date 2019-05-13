import { Component } from '@angular/core';
import { FormsService, Role } from '../../services/forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  constructor(
    public fs: FormsService,
    public router: Router
  ) {
    this.fs.role = Role.Preview;
  }
  save(){
     this.fs.saveResponse(this.fs.forms);
     this.router.navigateByUrl('/edit/mode');
  }
}
