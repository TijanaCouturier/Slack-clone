import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-channel-dialog',
  templateUrl: './new-channel-dialog.component.html',
  styleUrls: ['./new-channel-dialog.component.scss']
})
export class NewChannelDialogComponent implements OnInit {
 

  newChannel = '';

  constructor(public dialogRef: MatDialogRef<NewChannelDialogComponent> ){ }

  ngOnInit(): void {
  }

  saveUser(){
  
  }

}
