import { Component, QueryList, ViewChildren } from '@angular/core';
import { getID } from '../../helpers/idGenerator.js';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.scss']
})
export class QuestionsContainerComponent  {
  questionsList: Array<number> = [];
  @ViewChildren(QuestionListComponent) questions: QueryList<QuestionListComponent>;
  constructor(public fs: FormsService) {
    this.addQuestion();
  }
  addQuestion() {
    if (this.questions) {
      this.questions.forEach((component) => component.isEdit = false);
    }
    this.questionsList.push(getID());
  }
  deleteQuestion(index: number) {
      this.questionsList =  this.questionsList.filter((id) => id !== index);
  }
  drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.questionsList, event.previousIndex, event.currentIndex);
    moveItemInArray(this.fs.forms, event.previousIndex, event.currentIndex);
  }
}
