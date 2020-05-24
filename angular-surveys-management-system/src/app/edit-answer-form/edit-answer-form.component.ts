import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';

import { Member } from '../member';
import { Survey } from '../survey';
import { Answer } from '../answer';
import { HttpClient } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-answer-form',
  templateUrl: './edit-answer-form.component.html',
  styleUrls: ['./edit-answer-form.component.css']
})
export class EditAnswerFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private http: HttpClient, private route: Router,
    private activatedRoute: ActivatedRoute) {}

  questions:string[] = [];
  
  routeParams = this.activatedRoute.snapshot.params;
  submittedSurvey = false;

  dbAnswers:string[] = [];

  ngOnInit(){

    this.apiService.getAnswersWithID(this.routeParams.id).subscribe((data: any) => {
      console.log("testing", data);

      this.dbAnswers = Object.keys(data).map(key => data[key]);
      this.dbAnswers = this.dbAnswers.filter(data => data !== "");  // Remove empty elements
      this.dbAnswers = this.dbAnswers.splice(3,);  // Remove ID, name and title elements
      
      this.registrationForm.patchValue(data);
      
      console.log(this.dbAnswers.length);
      for(let i = 0; i < this.dbAnswers.length; i++){
        this.answers.push(this.fb.control(this.dbAnswers[i]));
      }
    });
    
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(2)]],
      answers: this.fb.array([]),
    });

    this.displayQs();
  }

  selected_id: number;

  displayQs(): void {
    console.log(this.registrationForm.value.title);

    this.questions = []; 

    this.apiService.getSurveys().subscribe((surveys: Survey[])=>{
      for(let i = 0; i < surveys.length; i++){
        if(surveys[i].title === this.registrationForm.value.title){
          this.selected_id = surveys[i].id;
          console.log(this.selected_id);
        }
      }

      this.apiService.getSurveyWithID(this.selected_id).subscribe((questions: any) => {
        console.log("testing", questions);
  
        this.questions = Object.keys(questions).map(key => questions[key]);
        this.questions = this.questions.filter(question => question !== "");  // Remove empty elements
        this.questions = this.questions.splice(2,);  // Remove ID and title elements
      });
    })

  }

  registrationFormArray: FormGroup[];

  surveyPush(){
    this.registrationFormArray.push(this.registrationForm);
  }
  
  get name(){
    return this.registrationForm.get("name");
  }

  get title(){
    return this.registrationForm.get("title");
  }

  get answers(){
    return this.registrationForm.get("answers") as FormArray;
  }

  updateAnswers(){
    console.log("Update", this.registrationForm.value);

    this.apiService.updateAnswers(this.registrationForm.value, this.routeParams.id).subscribe(() =>
    {
      this.route.navigate(['answer-table']);
    })
  }
  

}
