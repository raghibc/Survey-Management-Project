import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { SurveyTableComponent } from './survey-table/survey-table.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';
import { DeleteSurveyComponent } from './delete-survey/delete-survey.component';
import { FindSurveyComponent } from './find-survey/find-survey.component';

const routes: Routes = [
  {path: 'new-survey', component: NewSurveyComponent },
  {path: 'survey-table', component: SurveyTableComponent },
  {path: 'edit-survey', component: EditSurveyComponent },
  {path: 'delete-survey', component: DeleteSurveyComponent },
  {path: 'find-survey', component: FindSurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ NewSurveyComponent, SurveyTableComponent, EditSurveyComponent, DeleteSurveyComponent, FindSurveyComponent ]