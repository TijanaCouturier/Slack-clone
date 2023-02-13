import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  user = new User();
 // channelId: string;
  allUsers = [];
  public loadMoreParentItem: string | null = null; 
  public id:number = 0;
 


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { 

    
  }
  filterTitle(ref) : QueryFn{
    return ref.orderBy('firstName', 'asc');
 }


  ngOnInit(): void {
    this.firestore
    .collection('channels', this.filterTitle.bind(this))
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
    });
  }


  commentarRoom(){

  }

}
