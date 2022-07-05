import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails()),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);
    this.usersService.createNewUser(user)
      .subscribe((user: User) => {
        this.router.navigate(["/login"], {
          queryParams: {
            nowCanlogin : true,
          }
        })
      });
  }

  forbiddenEmails(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.usersService.getUserByEmail(control.value);
    };
  }


}
