




import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewChannelDialogComponent } from './new-channel-dialog/new-channel-dialog.component';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { User } from 'src/models/user.class';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  id?: number;

}


interface FoodNodes {
  names: string;
  childrens?: FoodNodes[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Channels',
    children: [{name: 'allgemein', id: 1 }, {name: 'javascript', id: 2}, {name: 'angular', id: 3}, {name: 'html-css', id: 4}, {name: 'bewerbung', id: 5}],
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
  public searchparam = "all";
  public loadMoreParentItem: string | null = null; 
  public id:number = 0;
 

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
    public router: Router, public dialog: MatDialog,
    
    
  ) {
    this.dataSource.data = TREE_DATA;
    this.dataSources.data = TREE_DATAS;
  }
 
 
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  hasChilds = (_: number, node: FoodNodes) => !!node.childrens && node.childrens.length > 0;

  openDialog(){
    this.dialog.open(NewChannelDialogComponent);
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

/*
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewChannelDialogComponent } from './new-channel-dialog/new-channel-dialog.component';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { User } from 'src/models/user.class';

interface FoodNodeFlat {
  name: string;
  children?: FoodNodeFlat[];
  id: number;

}


interface FoodNodes {
  names: string;
  childrens?: FoodNodes[];
}

const TREE_DATA: FoodNodeFlat[] = [
  {name: 'Channels', id: 1 },
  {name: 'allgemein', id: 2 }, 
  {name: 'javascript', id: 3},
  {name: 'angular', id: 4}, 
  {name: 'html-css', id: 5}, 
  {name: 'bewerbung', id: 6}
]

 


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
  public searchparam = "all";
  public loadMoreParentItem: string | null = null; 
  public id:number = 0;
 

  treeControl = new NestedTreeControl<FoodNodeFlat>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNodeFlat>();

  treeControls = new NestedTreeControl<FoodNodes>(node => node.childrens);
  dataSources = new MatTreeNestedDataSource<FoodNodes>();


  constructor(
    public router: Router, public dialog: MatDialog,
    
    
  ) {
    this.dataSource.data = this.treeConstruct (TREE_DATA);
    this.dataSources.data = TREE_DATAS;
  }

 
 
  hasChild = (_: number, node: FoodNodeFlat) => !!node.children && node.children.length > 0;
  hasChilds = (_: number, node: FoodNodes) => !!node.childrens && node.childrens.length > 0;

  openDialog(){
    this.dialog.open(NewChannelDialogComponent);
  }

treeConstruct(treeData) {
    let constructedTree = [];
    for (let i of treeData) {
      let treeObj = i;
      let assigned = false;
      this.constructTree(constructedTree, treeObj, assigned)
    }
    return constructedTree;
  }
constructTree(constructedTree, treeObj, assigned) {
if (treeObj.parentId == null) {
      treeObj.children = [];
      constructedTree.push(treeObj);
      return true;
    } else if (treeObj.parentId == constructedTree.Id) {
      treeObj.children = [];
      constructedTree.children.push(treeObj);
      return true;
    }
    else {
      if (constructedTree.children != undefined) {
        for (let index = 0; index < constructedTree.children.length; index++) {
          let constructedObj = constructedTree.children[index];
          if (assigned == false) {
            assigned = this.constructTree(constructedObj, treeObj, assigned);
          }
        }
      } else {
        for (let index = 0; index < constructedTree.length; index++) {
          let constructedObj = constructedTree[index];
          if (assigned == false) {
            assigned = this.constructTree(constructedObj, treeObj, assigned);
          }
        }
      }
      return false;
    }
  }
 
}

*/
