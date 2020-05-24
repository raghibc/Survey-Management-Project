import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ApiService } from '../api.service';
import { Member } from '../member';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private http: HttpClient) { }

  positions = ["Student", "Alumni", "Faculty"];
  maxDate = new Date(new Date().getFullYear() - 17, 11, 31);    // Member must be at least 17
  submittedSurvey = false;

  ngOnInit(){
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern("^[a-zA-Z]+$")]],
      dob: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern("^[\\w]+@[\\w\.]+\\.(com|org|net|gov|edu)$")]],
      phone: ['', [Validators.required, Validators.pattern("^[\\d]{10}$")]],
    });
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
  
  get position(){
    return this.registrationForm.get("position");
  }

  get email(){
    return this.registrationForm.get("email");
  }

  get phone(){
    return this.registrationForm.get("phone");
  }

  surveySubmit(){
    this.submittedSurvey = true;

    console.log(this.registrationForm.value);

    this.apiService.createMember(this.registrationForm.value)
      .subscribe((member: Member)=>{
        console.log("Member created, ", member);
      }
    );
  } 

  
}

