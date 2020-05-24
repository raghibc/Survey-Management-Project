import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys-buttons',
  templateUrl: './surveys-buttons.component.html',
  styleUrls: ['./surveys-buttons.component.css']
})
export class SurveysButtonsComponent {

  constructor(private router: Router){}

  showSurveyTable(){
    this.router.navigate(['/survey-table']);
  }

  makeNewSurvey(){
    this.router.navigate(['/survey-form']);
  }

}
