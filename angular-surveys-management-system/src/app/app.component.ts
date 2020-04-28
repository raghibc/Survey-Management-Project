import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-surveys-management-system';

  constructor(private router: Router){}

  showTable(){
    this.router.navigate(['/survey-table']);
  }

  makeNewSurvey(){
    this.router.navigate(['/new-survey']);
  }

  editSurvey(){
    this.router.navigate(['/edit-survey']);
  }

  deleteSurvey(){
    this.router.navigate(['/delete-survey']);
  }

  findSurvey(){
    this.router.navigate(['/find-survey']);
  }

}
