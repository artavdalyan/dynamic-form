import { Injectable } from '@angular/core';


export enum Role {
  Preview = 'Preview',
  Edit = 'Edit',
  Read = 'Read',
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  forms = [];
  responses = [];
  role: Role;

  constructor() {
    this.forms = JSON.parse(localStorage.getItem('forms')) || [];
    this.responses = JSON.parse(localStorage.getItem('response')) || [];
  }

  addForm(field) {
    const formIndex = this.forms.findIndex(({id}) => id === field.id);
    if (formIndex > -1) {
      this.forms.splice(formIndex, 1, field);
      return;
    }
    this.forms = [...this.forms, field];
    this.saveFormInStorage();
  }

  deletForm(formId: number) {
    this.forms = this.forms.filter(({id}) => id !== formId);
    this.saveFormInStorage();
  }

  saveResonse(field) {
    this.responses =  [field];
    this.saveResponceInStorage();
  }

  saveFormInStorage() {
    localStorage.setItem('forms', JSON.stringify(this.forms));
  }

  saveResponceInStorage() {
    localStorage.setItem('response', JSON.stringify(this.responses));
  }
}
