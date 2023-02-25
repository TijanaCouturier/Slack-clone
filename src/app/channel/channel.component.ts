import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/models/channel.class';
import { DialogEditChannelComponent } from '../dialog-edit-channel/dialog-edit-channel.component';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { User } from 'src/models/user.class';


//import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';
//import 'quill-emoji/dist/quill-emoji.js';
//import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
 // user = new User();
  channelId:  string = '';
  privateChannel = [];
  channel: Channel = new Channel();
  panelOpenState = false;
  message: string = '';
  emoijs = '';
  imageURL = '';
  user: User = new User();
 
 // editorForm;
 
  constructor(public dialog: MatDialog , private firestore: AngularFirestore,  public router: Router, private route: ActivatedRoute,) { 
   /* this.form = new FormGroup({
      'editor': new FormControl()
    }); */
  }
  @ViewChild('fInput', {static: false}) input: ElementRef | undefined;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [ ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    //upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    outline: false,
   
      toolbarHiddenButtons: [
        ['customClasses', 'subscript', 'superscript'],
        [
          'fontSize',
          'indent',
          'outdent',
          'heading',
          'insertVideo',
          'insertHorizontalRule',
          'removeFormat',
          'insertImage',
          'unlink',
          'backgroundColor',
          'textColor',
          'justifyLeft',
          'justifyCenter',
          'justifyRight',
          'justifyFull',
          'fontName'
        ],
      ],
    };

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(paramMap => {
      this.channelId = paramMap.get('id');
      this.loadChannel();
      //this.loadPosts();
    })
    /* this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    }) */
   
  }

  getMessage(){}
  addEmoji($event){}
 
  discardUpload(){}

  loadChannel() {  
    this.firestore
      .collection('channels')
      .doc(this.channelId)
      .valueChanges()
      .subscribe((channel: any) => {
        this.channel = new Channel(channel);
      })
  }

  editMenu(){
    const dialog = this.dialog.open(DialogEditChannelComponent);
   dialog.componentInstance.channel = new Channel(this.channel.toJSON());
   dialog.componentInstance.channelId = this.channelId;
  }

  
 

  upload($event: any){
    
  }

  handleClick($event: EmojiEvent) {
    this.message += $event.emoji.native;
  }

  emojiFilter(e: string): boolean {
    if (e && e.indexOf && e.indexOf('1F4') >= 0) {
      return true;
    }
    return false;
  }
}


