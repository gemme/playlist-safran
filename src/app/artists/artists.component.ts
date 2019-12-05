import { Component, OnInit } from '@angular/core';

interface Artist {
  name: string;
  url: string;
  listeners: string;
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
artists = [
  {name: "Selena Gomez",
   url: "https://www.last.fm/music/Selena+Gomez",
   listeners: "1058868"},
   {name: "Mi Banda El Mexicano",
   url: "https://www.last.fm/music/Mi+Banda+El+Mexicano",
   listeners: "10564"}];

  constructor() { }

  ngOnInit() {
  }

}
