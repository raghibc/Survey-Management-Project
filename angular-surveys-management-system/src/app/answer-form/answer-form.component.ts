import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';

import { Member } from '../member';
import { Survey } from '../survey';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  registrationForm: FormGroup;
  customSurveyPairs: FormArray;

  names:string[] = [];
  titles:string[] = [];
  questions:string[] = [];

  submittedSurvey = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) { 
    
    this.apiService.getMembers().subscribe((members: Member[])=>{
      for(let i = 0; i < members.length; i++){
        this.names.push(members[i].firstName + ' ' + members[i].lastName);
      }
    });

    this.apiService.getSurveys().subscribe((surveys: Survey[])=>{
      for(let i = 0; i < surveys.length; i++){
        this.titles.push(surveys[i].title);
      }
    })
  }

  ngOnInit(){

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(2)]],
      answers: this.fb.array([]),
    });
  }

  selected_id: number;

  displayQs(): void {
    console.log(this.registrationForm.value.title);

    this.apiService.getSurveys().subscribe((surveys: Survey[])=>{
      for(let i = 0; i < surveys.length; i++){
        if(surveys[i].title === this.registrationForm.value.title){
          this.selected_id = surveys[i].id;
          console.log(this.selected_id);
        }
      }

      this.apiService.getSurveyWithID(this.selected_id).subscribe((data: any) => {
        console.log("testing", data);
  
        this.questions = Object.keys(data).map(key => data[key]);
        this.questions = this.questions.filter(data => data !== "");  // Remove empty elements
        this.questions = this.questions.splice(2,);  // Remove ID and title elements
        
        this.answers.clear();
        this.addAnswer(this.questions.length);
      });
    })

  }

  addAnswer(numQs:number): void {
   // this.customSurveyPairs = this.registrationForm.get("customSurveyPairs") as FormArray;
   // this.customSurveyPairs.push(this.fb.group({question: "", answer: ""}));
    for(let i = 0; i < numQs; i++){
      this.answers.push(this.fb.control(""));
    }
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
   // return this.registrationForm.get("customSurveyPairs") as FormArray;
   return this.registrationForm.get("answers") as FormArray;
  }

  surveySubmit(){
    this.submittedSurvey = true;

    console.log(this.registrationForm.value);
    
    this.apiService.createAnswers(this.registrationForm.value).subscribe((answer: Answer)=>{
        console.log("Answers created, ", answer);
      }
    );
  }

  
}
