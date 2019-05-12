import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { EditModeComponent } from './components/edit-mode/edit-mode.component';
import { Role } from './services/forms.service';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'edit/mode',
    pathMatch: 'full',
  },
  {
    path: 'preview',
    component: PreviewComponent,
    data: {
      Role: Role.Preview
    }
  },
  {
    path: 'edit/mode',
    component: EditModeComponent,
    data: {
      Role: Role.Edit
    }
  },
  {
    path: '**',
    redirectTo : 'edit/mode',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
