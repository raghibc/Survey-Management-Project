import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

import { MembersButtonsComponent } from './members-buttons/members-buttons.component';
import { MemberTableComponent } from './member-table/member-table.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { EditMemberFormComponent } from './edit-member-form/edit-member-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import { SurveysButtonsComponent } from './surveys-buttons/surveys-buttons.component';
import { SurveyTableComponent } from './survey-table/survey-table.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { EditSurveyFormComponent } from './edit-survey-form/edit-survey-form.component';

import { AnswersButtonsComponent } from './answers-buttons/answers-buttons.component';
import { AnswerTableComponent } from './answer-table/answer-table.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { EditAnswerFormComponent } from './edit-answer-form/edit-answer-form.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent },
  {path: 'members-buttons', component: MembersButtonsComponent },
  {path: 'member-table', component: MemberTableComponent },
  {path: 'member-form', component: MemberFormComponent },
  {path: 'member-edit/:id', component: EditMemberFormComponent },
  {path: 'surveys-buttons', component: SurveysButtonsComponent },
  {path: 'survey-table', component: SurveyTableComponent },
  {path: 'survey-form', component: SurveyFormComponent },
  {path: 'survey-edit/:id', component: EditSurveyFormComponent },
  {path: 'answers-buttons', component: AnswersButtonsComponent },
  {path: 'answer-table', component: AnswerTableComponent },
  {path: 'answer-form', component: AnswerFormComponent },
  {path: 'answer-edit/:id', component: EditAnswerFormComponent },
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
  MembersButtonsComponent, MemberTableComponent, MemberFormComponent, 
  SurveysButtonsComponent, SurveyTableComponent, SurveyFormComponent,
  AnswersButtonsComponent, AnswerTableComponent, AnswerFormComponent,
  HomePageComponent, EditMemberFormComponent, EditSurveyFormComponent,
  EditAnswerFormComponent, DeleteDialogComponent ] 