import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Channel } from 'src/models/channel.class';

//import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-channel-dialog',
  templateUrl: './new-channel-dialog.component.html',
  styleUrls: ['./new-channel-dialog.component.scss']
})
export class NewChannelDialogComponent implements OnInit {
 
  channel = new Channel();
  loading = false;
 // jsondata: any;

 /* newChannel = '';
  channelName = '';
  description = '';
  users: [];
  channelId: string;*/
 /*  locked = false;
 channelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.maxLength(80)),

  }); */

  constructor(public dialogRef: MatDialogRef<NewChannelDialogComponent>, private firestore: AngularFirestore,){ }

  ngOnInit(): void {

    this.firestore
    .collection('channels')
    .valueChanges({ idField: 'channelId' })
    .subscribe();

   /* this.firestore
    .collection('channels')
    .valueChanges()
    .subscribe((channel) => {
      console.log('Adding channel', channel);
    }) */
    
  
  }

  saveChannel(){
  
   this.firestore
    .collection('channels')
    .add(this.channel.toJSON())
    this.dialogRef.close();
    this.loading = false;
    
   /* .then((result:any) =>{
      console.log('Adding user finished', result);
      this.dialogRef.close();
    }); */
  
    
  }
 

 /* saveUser(){
    
    if(this.channelId){

      this.firestore
      .collection('users')
      .doc(this.channelId)
      .update(this.channel.toJSON())
      .then(() => {
   
        this.dialogRef.close();
      });
    } else {
      //Throw error
    }
   

  }
*/

  /*


   saveChannel(){
   this.channel = new Channel();
   this.firestore
    .collection('channels')
    .add(this.channel.toJSON())
    .then((result:any) =>{
      console.log('Adding user finished', result);
      this.dialogRef.close();
    });
  }

   onSubmit() {
    if (this.channelForm.valid) {
      this.createNewChannel();
    }
  }
  
   createNewChannel() {
    this.channel = new Channel();
    this.channel.channelName = this.channelForm.controls.name.value || '';
    this.channel.channelName = this.channel.channelName.replace(/ /g, '-');
    this.channel.description = this.channelForm.controls.description.value || '';
    this.channel.users.push(this.channel.creator);
    this.saveChannel();
  }
*/
  

}
