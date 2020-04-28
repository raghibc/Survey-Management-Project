import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  registrationForm: FormGroup;
  customSurveyPairs: FormArray;

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  positions = ["Student", "Alumni", "Faculty"];

  submittedSurvey = false;

  ngOnInit(){
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")]],
      dob: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(2)]],
      position: ['', Validators.required],
      customSurveyPairs: this.fb.array([ ])
    });
  }

  addPair(): void {
    this.customSurveyPairs = this.registrationForm.get("customSurveyPairs") as FormArray;
    this.customSurveyPairs.push(this.fb.group({question: "", answer: ""}));
  }

  registrationFormArray: FormGroup[];

  surveyPush(){
    this.registrationFormArray.push(this.registrationForm);
  }
     
  get firstName(){
    return this.registrationForm.get("firstName");
  }

  get lastName(){
    return this.registrationForm.get("lastName");
  }

  get dob(){
    return this.registrationForm.get("dob");
  }

  get title(){
    return this.registrationForm.get("title");
  }
  
  get position(){
    return this.registrationForm.get("position");
  }

  get pair(){
    return this.registrationForm.get("customSurveyPairs") as FormArray;
  }

  surveySubmit(){
    this.submittedSurvey = true;

    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log("Success!", response),
        error => console.log("Error!", error)
      );
  }

  
}
