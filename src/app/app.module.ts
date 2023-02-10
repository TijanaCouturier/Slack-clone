import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NewChannelDialogComponent } from './new-channel-dialog/new-channel-dialog.component';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
//import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChatComponent,
    DirectivesComponent,
    LoginComponent,
    NewChannelDialogComponent,
    NewMessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatTreeModule,
    MatCardModule,
    //QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
