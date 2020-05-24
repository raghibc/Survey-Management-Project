import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-buttons',
  templateUrl: './members-buttons.component.html',
  styleUrls: ['./members-buttons.component.css']
})
export class MembersButtonsComponent {

  constructor(private router: Router){}

  showMembersTable(){
    this.router.navigate(['/member-table']);
  }

  makeMember(){
    this.router.navigate(['/member-form']);
  }
}
