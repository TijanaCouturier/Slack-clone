import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/models/channel.class';

@Component({
  selector: 'app-dialog-edit-channel',
  templateUrl: './dialog-edit-channel.component.html',
  styleUrls: ['./dialog-edit-channel.component.scss']
})
export class DialogEditChannelComponent implements OnInit {

  channel: Channel = new Channel();
  channelId = '';
  loading = false;
  date = new Date;

  constructor(public dialogRef: MatDialogRef<DialogEditChannelComponent>, private firestore: AngularFirestore,) { }

  ngOnInit(): void {
  }
  saveChannel(){
  
    this.firestore
     .collection('channels')
     .doc(this.channelId)
     .update(this.channel.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
   
   }

}
