import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewChannelDialogComponent } from '../new-channel-dialog/new-channel-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  channelOpen = true;
  activeChatChannel = '';
  channels = [];
  innerWidth: number;
  sidenavService: any;
  searchValue = '';

  constructor( public router: Router, public dialog: MatDialog,  private firestore: AngularFirestore,  ) { }

  ngOnInit(): void {
    this. loadChannels();
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


}


