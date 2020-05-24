import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers-buttons',
  templateUrl: './answers-buttons.component.html',
  styleUrls: ['./answers-buttons.component.css']
})
export class AnswersButtonsComponent {

  constructor(private router: Router){}

  showTable(){
    this.router.navigate(['/answer-table']);
  }

  makeNewSurvey(){
    this.router.navigate(['/answer-form']);
  }

}
