import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'channel/:id', component: ChannelComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'dataprotection', component: DataProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
