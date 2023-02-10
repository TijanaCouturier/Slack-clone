import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {


  channels = [
    {channel: 'allgemein' },
    {channel: 'javascript' },
    {channel: 'angular' },
    {channel: 'html-css' },
    {channel: 'bewerbung' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
