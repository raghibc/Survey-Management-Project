import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ApiService } from '../api.service';
import { Survey } from '../survey';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private http: HttpClient) { }

  submittedSurvey = false;

  ngOnInit(){
    this.registrationForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        questions: this.fb.array([])
    });
  }
 
  get customSurveyQs(){
    return this.registrationForm.get("questions") as FormArray;
  }

  addQuestion(){
    this.questions.push(this.fb.control(""));
  }

  removeQuestion(index): void {
    this.questions.removeAt(index);
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

  surveySubmit(){
    this.submittedSurvey = true;

    console.log(this.registrationForm.value);
    
    this.apiService.createSurvey(this.registrationForm.value)
      .subscribe((survey: Survey)=>{
        console.log("Survey created, ", survey);
      }
    );
  }

  
}
