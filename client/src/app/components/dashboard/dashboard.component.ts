import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { BaseComponent } from '../base.component';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'sms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit, OnDestroy {


  usersCount: { [key: string]: number };

  user: User;


  constructor(private dashboardService: DashboardService, private auth: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.user = this.auth.user;

    this.subscriptions.add(this.dashboardService.getUsersCount().subscribe(res => {
      this.usersCount = res;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
