import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NewChannelDialogComponent } from '../new-channel-dialog/new-channel-dialog.component';
import { collection, getDocs, getFirestore } from '@firebase/firestore';
import { UsersService } from '../../app/services/users.service';
import {
  combineLatest,
  map,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  channelOpen = true;
  activeChatChannel = '';
  channels: any = [];
  users = [];
  innerWidth: number;
  sidenavService: any;
  searchValue = '';
  userId: string;
  firstName: string;
  lastName: string;
  greet: string;
  searchControl = new FormControl('');
  user$ = this.usersService.currentUserProfile$;
  users$ = combineLatest([
    this.usersService.allUsers$,
    this.user$,
    this.searchControl.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([users, searchString]) => {
      return users.filter((u) =>
        u.firstName?.toLowerCase().includes(searchString.toLowerCase())
      );
    })
  );
  colRef = collection(getFirestore(), 'users');

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      this.userId = params['id'];
    });
    await this.getUser();
    await this.getAllUser();
    this.getTime();
    this.loadChannels();
  }
  openDialog() {
    this.dialog.open(NewChannelDialogComponent);
  }

  @Output()
  searchTextChanges: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanges() {
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
      console.log(this.users);
    } catch (error) {
      console.log(error);
    }
  }

  toggleChannelMenu() {
    if (this.channelOpen) {
      this.channelOpen = false;
    } else {
      this.channelOpen = true;
    }
  }

  getTime() {
    let now = new Date();
    let hour = now.getHours();

    if (hour < 12) {
      this.greet = 'Guten Morgen, ';
    } else if (hour < 18) {
      this.greet = 'Guten Tag, ';
    } else {
      this.greet = 'Guten Abend, ';
    }
  }

  showActive(value, positionInArray) {
    this.activeChatChannel = value;
    if (this.innerWidth < 645) {
      this.sidenavService.closeSidenav();
    }
  }
  loadChannels() {
    this.firestore
      .collection('channels')
      .valueChanges({ idField: 'channelId' })
      .subscribe((changes: any) => {
        this.channels = changes;
      });
  }
}
