import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewChannelDialogComponent } from '../new-channel-dialog/new-channel-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  channelOpen = true;
  activeChatChannel = '';
  channels = [];
  users = [];
  innerWidth: number;
  sidenavService: any;
  searchValue = '';
  name: string;


/*
  user = new User();
  allChannels = [];
  channel: Channel = new Channel();dr
  channelName: string;
  channelId: string;
  panelOpenState = false; */
 // channels: Channel[] = [];

  constructor( public router: Router, public dialog: MatDialog,  private firestore: AngularFirestore,  ) { }

  ngOnInit(): void {
    this. loadChannels();
    this.loadUsers();
  }
  openDialog(){
    this.dialog.open(NewChannelDialogComponent);
  }

  @Output()
  searchTextChanges: EventEmitter<string> = new EventEmitter<string>();

  
  onSearchTextChanges(){
    this.searchTextChanges.emit(this.searchValue);
  }


  toggleChannelMenu() {
    if (this.channelOpen) {
      this.channelOpen = false;
    }
    else {
      this.channelOpen = true;
    }
  }

  showActive(value, positionInArray) {
    this.activeChatChannel = value;
    if(this.innerWidth < 645){
      this.sidenavService.closeSidenav();
    }
  }
  loadChannels() {
    this.firestore
      .collection('channels')
      .valueChanges({ idField: 'channelId' })
      .subscribe((changes: any) => {
        this.channels = changes;
      })
  }

  loadUsers() {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'userId' })
      .subscribe((changes: any) => {
        this.users = changes;
        console.log(changes)
      })
  }



}
