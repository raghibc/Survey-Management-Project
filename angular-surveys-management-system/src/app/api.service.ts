import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';
import { Survey } from './survey';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//  PHP_API_SERVER = "localhost:3306";

  constructor(private httpClient: HttpClient) { }
  

  getMembers(): Observable<Member[]>{
  // return this.httpClient.get<Member[]>(`${this.PHP_API_SERVER}/api/index.php`);
    return this.httpClient.get<Member[]>(`http://localhost/api/indexMember.php`);
  }

  getMemberWithID(id: number) {
    return this.httpClient.get<Member>(`http://localhost/api/getMemberWithID.php?id=${id}`);
  }

  createMember(member: Member): Observable<Member>{ 
  //  return this.httpClient.post<Member>(`${ this.PHP_API_SERVER}/api/create.php`, member);
    return this.httpClient.post<Member>(`http://localhost/api/createMember.php`, member);
    
  }

  updateMember(member: Member, id: number){
  //  return this.httpClient.put<Member>(`${this.PHP_API_SERVER}/api/update.php`, member);
    return this.httpClient.put<Member>(`http://localhost/api/updateMember.php?id=${id}`, member);
  }

  deleteMember(id: number){
  //  return this.httpClient.delete<Member>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
    return this.httpClient.delete<Member>(`http://localhost/api/deleteMember.php/?id=${id}`);
  }

 

  getSurveys(): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(`http://localhost/api/indexSurvey.php`);  
  }

  getSurveyWithID(id: number) {
    return this.httpClient.get<Survey>(`http://localhost/api/getSurveyWithID.php?id=${id}`);
  }

  createSurvey(survey: Survey): Observable<Survey>{ 
    return this.httpClient.post<Survey>(`http://localhost/api/createSurvey.php`, survey);  
  }

  updateSurvey(survey: Survey, id: number){
    return this.httpClient.put<Survey>(`http://localhost/api/updateSurvey.php?id=${id}`, survey);
  }
  
  deleteSurvey(id: number){
    return this.httpClient.delete<Survey>(`http://localhost/api/deleteSurvey.php/?id=${id}`);
  }



  getAnswers(): Observable<Answer[]>{
    return this.httpClient.get<Answer[]>(`http://localhost/api/indexAnswers.php`);  
  }

  getAnswersWithID(id: number) {
    return this.httpClient.get<Answer>(`http://localhost/api/getAnswersWithID.php?id=${id}`);
  }

  createAnswers(answers: Answer): Observable<Answer>{ 
    return this.httpClient.post<Answer>(`http://localhost/api/createAnswers.php`, answers);  
  }

  updateAnswers(answers: Answer, id: number){
    return this.httpClient.put<Answer>(`http://localhost/api/updateAnswers.php?id=${id}`, answers);
  }
  
  deleteAnswers(id: number){
    return this.httpClient.delete<Answer>(`http://localhost/api/deleteAnswers.php/?id=${id}`);
  }


}

