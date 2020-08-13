import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.scss'],
})
export class MarblesComponent {
  title = 'MarbleDemo';
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
