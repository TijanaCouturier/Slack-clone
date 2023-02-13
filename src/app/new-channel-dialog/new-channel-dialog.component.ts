import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-new-channel-dialog',
  templateUrl: './new-channel-dialog.component.html',
  styleUrls: ['./new-channel-dialog.component.scss']
})
export class NewChannelDialogComponent implements OnInit {
 

  newChannel = '';
  channelName = '';
  description = '';

  user: any;

  constructor(public dialogRef: MatDialogRef<NewChannelDialogComponent>, private firestore: AngularFirestore,){ }

  ngOnInit(): void {
  }

  saveChannel(){
    this.firestore
    .collection('channels')
    .add(this.user.toJSON())
    .then((result:any) =>{
      console.log('Adding user finished', result);
      this.dialogRef.close();
    });
  }

}
