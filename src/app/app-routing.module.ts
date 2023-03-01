import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'chat', component: ChatComponent},
      {path: 'channel/:id', component: ChannelComponent},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'dataprotection', component: DataProtectionComponent},
  {path: '**', component: LoginComponent},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
 {path: '', component: ChatComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'channel/:id', component: ChannelComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'dataprotection', component: DataProtectionComponent},
*/