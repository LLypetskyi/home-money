import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeStateTrigger } from '../shared/animations/fade.animation';

@Component({
  selector: 'wfm-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [fadeStateTrigger]
})
export class AuthComponent implements OnInit {
  @HostBinding('@fade') a = true;

    constructor() { }

  ngOnInit(): void {
  }

}
