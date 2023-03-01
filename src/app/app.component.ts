import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor() {}

  ngOnInit(): void {
  }

}


/* Das
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewChannelDialogComponent } from './new-channel-dialog/new-channel-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  channelOpen = true;
  activeChatChannel = '';
  channels = [];
  innerWidth: number;
  sidenavService: any;
  searchValue = '';


*/



/*
  user = new User();
  allChannels = [];
  channel: Channel = new Channel();dr
  channelName: string;
  channelId: string;
  panelOpenState = false; */
 // channels: Channel[] = [];
 





/* Das
 
  constructor(
    public router: Router, public dialog: MatDialog,  private firestore: AngularFirestore,  
    
  ) {}

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

*/








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
 setParent(data, parent) {
    data.parent = parent;
    if (data.children) {
      data.children.forEach(x => {
        this.setParent(x, data);
      });
    }
  }

 checkAllParents(node) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected=descendants.every(child => child.selected);
      node.parent.indeterminate=descendants.some(child => child.selected);
      this.checkAllParents(node.parent);
    }
  }

  todoItemSelectionToggle(checked, node) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach(x => {
        this.todoItemSelectionToggle(checked, x);
      });
    }
    this.checkAllParents(node);
  }

  submit() {
    let result = [];
    this.dataSource.data.forEach(node => {
      result = result.concat(
        this.treeControl
          .getDescendants(node)
          .filter(x => x.selected && x.id)
          .map(x => x.id)
      );
    });
    console.log(result);
  }
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
  }^

    this.firestore
    .collection('channels')
    .valueChanges({idField: 'channelId'})
    .subscribe((changes: any) => {
      console.log('Received changes from DB_1', changes);
      this.allChannels = changes;
    });
 
}















*/




/* copy all

interface FoodNode {
  name: string;
  children?: FoodNode[];
  id?: number;
  selected?: boolean;
  indeterminate?:boolean;
  parent?:FoodNode
}


interface FoodNodes {
  names: string;
  childrens?: FoodNodes[];
}




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
  channelOpen = true;
  activeChatChannel = '';
  channels = [];
  innerWidth: number;




  user = new User();
  allChannels = [];
  channel: Channel = new Channel();
  channelName: string;
  channelId: string;
  panelOpenState = false;
 // channels: Channel[] = [];
  jsondata = {name: 'Channels', children: []};
  
 
 
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  treeControls = new NestedTreeControl<FoodNodes>(node => node.childrens);
  dataSources = new MatTreeNestedDataSource<FoodNodes>();

 
  constructor(
    public router: Router, public dialog: MatDialog,  private firestore: AngularFirestore
    
    
  ) {
    //this.dataSource.data = TREE_DATA;
    
  }
  
  filterFirstName(ref) : QueryFn{
    return ref.orderBy('firstName', 'asc');
 }


  ngOnInit(): void {
    this.reloadChannels();
    this.dataSources.data = TREE_DATAS;
  }

 public reloadChannels(){
    this.jsondata = {name: 'Channels', children: []};
    this.
    firestore
    .collection('channels')
    .valueChanges()
    .subscribe((changes: any) => {
      this.allChannels = changes; 
      for (let index = 0; index < this.allChannels.length; index++) {
        this.jsondata.children.push({name: this.allChannels[index].channelName, id:1});
      }
      
      this.setConst();
    });
  }

 
  setConst () {
  const TREE_DATA: FoodNode[] = [this.jsondata];
  this.dataSource.data = TREE_DATA
  
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  
  hasChilds = (_: number, node: FoodNodes) => !!node.childrens && node.childrens.length > 0;

  openDialog(){
    this.dialog.open(NewChannelDialogComponent);
  }
  navigateToRoute(){

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
     // this.sidenavService.closeSidenav();
    }
  }


}
*/