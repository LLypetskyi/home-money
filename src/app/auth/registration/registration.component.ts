import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';



@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: UntypedFormGroup;


  constructor(
    private usersService: UsersService,
    private router: Router,
    private title: Title
  ) {
    title.setTitle('Реєстрація')
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      'email': new UntypedFormControl(null, [Validators.required, Validators.email], this.forbiddenEmails()),
      'password': new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new UntypedFormControl(null, [Validators.required]),
      'agree': new UntypedFormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);
    this.usersService.createNewUser(user)
      .subscribe((user: User) => {
        this.router.navigate(["/auth/login"], {
          queryParams: {
            nowCanlogin: true,
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
