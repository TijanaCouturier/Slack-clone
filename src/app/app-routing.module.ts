import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'channel/:id', component: ChannelComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
