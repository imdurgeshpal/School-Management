import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  selector: 'sms-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  user: User;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.user = this.auth.user;
  }

}
