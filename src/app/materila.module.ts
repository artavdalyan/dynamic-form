import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatTabsModule,
  MatSelectModule,
  MatIconModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatRadioModule
} from '@angular/material';

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule,
  DragDropModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {
}
