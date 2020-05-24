import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ApiService } from '../api.service';
import { Survey } from '../survey';
import { HttpClient } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-survey-form',
  templateUrl: './edit-survey-form.component.html',
  styleUrls: ['./edit-survey-form.component.css']
})
export class EditSurveyFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private http: HttpClient, private route: Router,
    private activatedRoute: ActivatedRoute) {}

  routeParams = this.activatedRoute.snapshot.params;
  dbQuestions:string[] = [];

  ngOnInit(){
  
    this.apiService.getSurveyWithID(this.routeParams.id).subscribe((questions: any) => {
          console.log("testing", questions);

          this.dbQuestions = Object.keys(questions).map(key => questions[key]);
          this.dbQuestions = this.dbQuestions.filter(question => question !== "");  // Remove empty elements
          this.dbQuestions = this.dbQuestions.splice(2,);  // Remove ID and title elements

          console.log(this.dbQuestions);        

          this.registrationForm.patchValue(questions);

          for(let i = 0; i < this.dbQuestions.length; i++){
            this.questions.push(this.fb.control(this.dbQuestions[i]));
          }
      });

    this.registrationForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        questions: this.fb.array([]),
    });
    
  }

  registrationFormArray: FormGroup[];

  surveyPush(){
    this.registrationFormArray.push(this.registrationForm);
  }
     
  get title(){
    return this.registrationForm.get("title");
  }

  get questions(){
    return this.registrationForm.get("questions") as FormArray;
  }


  updateSurvey(){
    console.log("Update");
    console.log(this.registrationForm.value);

    this.apiService.updateSurvey(this.registrationForm.value, this.routeParams.id).subscribe(() =>
    {
      this.route.navigate(['survey-table']);
    })
  }

}
