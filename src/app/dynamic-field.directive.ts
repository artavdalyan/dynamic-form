import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FieldConfig } from './components/questions-container/question-list/question-list.component';
import { ShortAnswerComponent } from './components/short-answer/short-answer.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { MultiChoiceComponent } from './components/multi-choice/multi-choice.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DateComponent } from './components/date/date.component';
import { TimeComponent } from './components/time/time.component';

const questionOptions = {
  ShortAnswerComponent,
  ParagraphComponent,
  MultiChoiceComponent,
  CheckboxComponent,
  DropdownComponent,
  FileUploadComponent,
  DateComponent,
  TimeComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() readonly = false;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      questionOptions[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.field.readonly = this.readonly;
  }

}
