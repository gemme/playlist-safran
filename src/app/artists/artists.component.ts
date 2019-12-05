import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  newArtist = '';

  constructor() { }

  searchArtist(){
    if (this.newArtist != ''){
      console.log(this.newArtist);
      this.newArtist = '';
    } else {
      console.log('You need to write an artist');
    }
  }

  ngOnInit() {
  }

}
