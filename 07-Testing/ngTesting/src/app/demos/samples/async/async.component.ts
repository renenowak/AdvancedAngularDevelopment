import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from './simple-auth.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent implements OnInit {
  needsLogin = true;

  constructor(private auth: SimpleAuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}
