import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Message } from 'src/app/shared/models/message.model';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from '../../shared/services/auth.service';
import { fadeStateTrigger } from '../../shared/animations/fade.animation';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  message!: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Вхід в систему');
    meta.addTags([
      { name: 'keywords', content: 'логін, вхід, система' },
      { name: 'description', content: 'Сторінка для входу в систему' }
    ]

    );
  }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Тепер Ви можете зайти в систему',
            type: 'success'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'Для роботи з системою необхідно авторизуватися',
            type: 'warning'
          });
        }
      });

    this.form = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email).subscribe((user: User) => {
      if (user) {
        if (user.password === formData.password) {
          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['/system', 'bill']);
        } else {
          // console.log('user', user);
          // console.log('user.password', user.password);
          // console.log('formData.password', formData.password);
          this.showMessage({
            text: 'Пароль не вірний',
            type: 'danger',
          });
        }
      } else {
        this.showMessage({
          text: 'Такого користувача не існує',
          type: 'danger',
        });
      }
    });
  }
}
