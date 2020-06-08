import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services';
import { JWT_TOKEN } from 'src/app/core/constants/sms-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    const jwtRequest = this.formGroup.value;
    this.authService.authenticate(jwtRequest).subscribe((res => {
      localStorage.setItem(JWT_TOKEN, res.token);
      this.router.navigateByUrl('/container');
    }));

  }
}
