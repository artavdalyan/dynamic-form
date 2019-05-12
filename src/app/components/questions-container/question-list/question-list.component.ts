import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ShortAnswerComponent } from '../../short-answer/short-answer.component';
import { ParagraphComponent } from '../../paragraph/paragraph.component';
import { MultiChoiceComponent } from '../../multi-choice/multi-choice.component';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { FileUploadComponent } from '../../file-upload/file-upload.component';
import { DateComponent } from '../../date/date.component';
import { TimeComponent } from '../../time/time.component';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { FormsService } from '../../../services/forms.service';

export class FieldConfig {
  id: number;
  options?: any [];
  type: string;
  question: string;
  description = '';
  required = false;
  value?: any;
  date?: Date | number;
  time?: number;
  constructor(field) {
    Object.assign(this, field);
  }
}
export const questionOptions = [
  {
    component: ShortAnswerComponent,
    label: 'Short answer',
    key: 'ShortAnswerComponent'
  },
  {
    component: ParagraphComponent,
    label: 'Paragraph',
    key: 'ParagraphComponent'
  },
  {
    component: MultiChoiceComponent,
    label: 'Multiple choice',
    key: 'MultiChoiceComponent'

  },
  {
    component: CheckboxComponent,
    label: 'Checkboxes',
    key: 'CheckboxComponent'
  },
  {
    component: DropdownComponent,
    label: 'Dropdown',
    key: 'DropdownComponent'
  },
  {
    component: FileUploadComponent,
    label: 'File Upload',
    key: 'FileUploadComponent'
  },
  {
    component: DateComponent,
    label: 'Date',
    key: 'DateComponent'
  },
  {
    component: TimeComponent,
    label: 'Time',
    key: 'TimeComponent'
  },
];

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(private resolver: ComponentFactoryResolver,
              private fs: FormsService
  ) {
  }
  options = questionOptions;
  selectedOption = 0;
  required = false;
  componentInstance = null;
  description = '';
  @HostBinding('class.isEdit') isEdit = true;
  @Input() index: number;
  @Output() deleteQuestion = new EventEmitter();
  @Output() saveQuestion = new EventEmitter();
  @ViewChild('dynamicContainer', {read: ViewContainerRef}) container: ViewContainerRef;
  @HostListener('click', ['$event.target']) onClick() {
    if (!this.isEdit) {
      this.isEdit = true;
      this.componentInstance.instance.isEdit = true;
    }
  }

  ngOnInit() {
    this.createComponent(questionOptions[0]);
  }

  removeQuestion(e: Event) {
    this.fs.deletForm(this.index);
    this.deleteQuestion.emit(this.index);
    e.stopPropagation();
  }
  cancelEdit(e: Event) {
    this.componentInstance.instance.isEdit = this.isEdit = false;
    e.stopPropagation();
  }

  save(e: Event) {
    this.saveQuestion.emit(this.index);
    this.addForm();
    e.stopPropagation();

  }

  selectionChange({value}) {
    this.createComponent(questionOptions[value]);
  }

  createComponent(question) {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(question.component);
    this.componentInstance = this.container.createComponent(factory);
    this.componentInstance.instance.isEdit = true;
    this.componentInstance.instance.field = new FieldConfig({
      id: this.index,
      type: question.key,
    });
  }

  addForm() {
    const instance = this.componentInstance.instance;
    instance.field.description = this.description;
    instance.field.required = this.required;
    this.fs.addForm(instance.field);
    instance.isEdit = this.isEdit = false;
  }
}
