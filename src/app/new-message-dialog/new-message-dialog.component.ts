import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.scss']
})
export class NewMessageDialogComponent implements OnInit {

  user = new User();
  allUsers = [];
  value = '';
  firstName = '';
  lastName = '';
  message = '';
  constructor() { }

  ngOnInit(): void {
  }

}
