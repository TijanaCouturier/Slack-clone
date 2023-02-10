import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewChannelDialogComponent } from './new-channel-dialog/new-channel-dialog.component';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { User } from 'src/models/user.class';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface FoodNodes {
  names: string;
  childrens?: FoodNodes[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Channels',
    children: [{name: 'allgemein'}, {name: 'javascript'}, {name: 'angular'}, {name: 'html-css'}, {name: 'bewerbung'}],
  },
 
];

const TREE_DATAS: FoodNodes[] = [
  {
    names: 'Directives',
    childrens: [{names: 'Tijana Couturier'}, {names: 'Anja Huber'}, {names: 'Joachim Müller'}, {names: 'Junus Ergin'}, {names: 'Ben Wunderlich'}],
  },
 
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slack';
  value = '';
  firstName = '';
  lastName = '';
  message = '';
  user = new User();
  allUsers = [];

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  treeControls = new NestedTreeControl<FoodNodes>(node => node.childrens);
  dataSources = new MatTreeNestedDataSource<FoodNodes>();

  newMessages = [
    {
      firstName: ''
    },
    {
      lastName: ''
    },
    {
      message: ''
    }

  ]
 
  constructor(
    public router: Router, public dialog: MatDialog
    
  ) {
    this.dataSource.data = TREE_DATA;
    this.dataSources.data = TREE_DATAS;
  }
  
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  hasChilds = (_: number, node: FoodNodes) => !!node.childrens && node.childrens.length > 0;

  openDialog(){
    this.dialog.open(NewChannelDialogComponent);
  }

  openMessageDialog(){
    this.dialog.open(NewMessageDialogComponent);
  }
}



/*
 channels = [ //name
    {channel: 'allgemein' }, //children
    {channel: 'javascript' },
    {channel: 'angular' },
    {channel: 'html-css' },
    {channel: 'bewerbung' }
  ]
*/