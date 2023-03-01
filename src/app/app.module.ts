import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NewChannelDialogComponent } from './new-channel-dialog/new-channel-dialog.component';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DialogEditChannelComponent } from './dialog-edit-channel/dialog-edit-channel.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';



//import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChatComponent,
    LoginComponent,
    NewChannelDialogComponent,
    NewMessageDialogComponent,
    ImprintComponent,
    DataProtectionComponent,
    DialogEditChannelComponent,
    SidenavComponent,
    DashboardComponent,
    SignUpComponent

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
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatTreeModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatProgressBarModule,
    HttpClientModule, 
    AngularEditorModule,
    MatCheckboxModule,
    MatExpansionModule,
    PickerModule
  //  QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
