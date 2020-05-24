import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ApiService } from '../api.service';
import { Member } from '../member';
import { HttpClient } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-member-form',
  templateUrl: './edit-member-form.component.html',
  styleUrls: ['./edit-member-form.component.css']
})
export class EditMemberFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private http: HttpClient, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  positions:string[] = ["Student", "Alumni", "Faculty"];
  maxDate = new Date(new Date().getFullYear() - 17, 11, 31);    // Member must be at least 17
  
  routeParams = this.activatedRoute.snapshot.params;

  ngOnInit(){

    this.apiService.getMemberWithID(this.routeParams.id)
      .subscribe((answers: any) => {
          this.registrationForm.patchValue(answers);
      });

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

  updateMember(){
    console.log("Update");
    console.log(this.registrationForm.value);

    this.apiService.updateMember(this.registrationForm.value, this.routeParams.id).subscribe(() =>
    {
      this.route.navigate(['member-table']);
    })
  }

  
}
