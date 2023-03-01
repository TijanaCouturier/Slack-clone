import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Channel } from 'src/models/channel.class';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channelId:  string = '';
  privateChannel = [];
  channel: Channel = new Channel();
  panelOpenState = false;
  message: string = '';
  emoijs = '';
  imageURL = '';
  user: User = new User();

  constructor(public dialog: MatDialog , private firestore: AngularFirestore,  public router: Router, private route: ActivatedRoute) { }

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
  //   const dialog = this.dialog.open(DialogEditChannelComponent);
  //  dialog.componentInstance.channel = new Channel(this.channel.toJSON());
  //  dialog.componentInstance.channelId = this.channelId;
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
