import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortAnswerComponent } from './components/short-answer/short-answer.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { MultiChoiceComponent } from './components/multi-choice/multi-choice.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DateComponent } from './components/date/date.component';
import { TimeComponent } from './components/time/time.component';
import { PreviewComponent } from './components/preview/preview.component';
import { EditModeComponent } from './components/edit-mode/edit-mode.component';
import { MaterialModule } from './materila.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';
import { QuestionListComponent } from './components/questions-container/question-list/question-list.component';
import { FormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { ResponsesComponent } from './components/responses/responses.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortAnswerComponent,
    ParagraphComponent,
    MultiChoiceComponent,
    CheckboxComponent,
    DropdownComponent,
    FileUploadComponent,
    DateComponent,
    TimeComponent,
    PreviewComponent,
    EditModeComponent,
    QuestionsContainerComponent,
    QuestionListComponent,
    DynamicFieldDirective,
    ResponsesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ShortAnswerComponent,
    ParagraphComponent,
    MultiChoiceComponent,
    CheckboxComponent,
    DropdownComponent,
    FileUploadComponent,
    DateComponent,
    TimeComponent,
  ]
})
export class AppModule { }
