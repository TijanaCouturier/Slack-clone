import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewChannelDialogComponent } from '../new-channel-dialog/new-channel-dialog.component';
import { LoginComponent } from '../login/login.component';
import { collection, getDocs, getFirestore } from '@firebase/firestore';

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
  userId: string;
  firstName: string;
  lastName: string;
  colRef = collection(getFirestore(), 'users');

/*
  user = new User();
  allChannels = [];
  channel: Channel = new Channel();dr
  channelName: string;
  channelId: string;
  panelOpenState = false; */
 // channels: Channel[] = [];

  constructor( public router: Router, public dialog: MatDialog,  private firestore: AngularFirestore,  private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      this.userId = params['id'];
    })
    await this.getUser();
    await this.getAllUser();

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

  async getUser() {
      try {
        const docsSnap = await getDocs(this.colRef);
        docsSnap.forEach((doc) => {
          if (doc.id == this.userId) {
            this.firstName = doc.get('firstName');
            this.lastName = doc.get('lastName');
          }
        });
      } catch (error) {
        console.log(error);
      }
  }

  async getAllUser() {
    try {
      const docsSnap = await getDocs(this.colRef);
      docsSnap.forEach((doc) => {
          this.users.push(doc.get('firstName') + ' ' + doc.get('lastName'));
      });
      console.log(this.users)
    } catch (error) {
      console.log(error);
    }
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
