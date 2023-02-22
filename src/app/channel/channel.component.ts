import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/models/channel.class';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
 // user = new User();
  channelId:  string;
  privateChannel = [];
  channel: Channel = new Channel();
 
 
  constructor(public dialog: MatDialog, private firestore: AngularFirestore,  public router: Router, private route: ActivatedRoute,) { 
    
  }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(paramMap => {
      this.channelId = paramMap.get('id');
      this.loadChannel();
      //this.loadPosts();
    })
   
  }

  loadChannel() {  
    this.firestore
      .collection('channels')
      .doc(this.channelId)
      .valueChanges()
      .subscribe((channel: any) => {
        this.channel = new Channel(channel);
      })
  }


}
