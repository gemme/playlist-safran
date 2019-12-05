import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

interface Artist {
  name: string;
  url: string;
  listeners: string;
}

interface Response {
  results?:{
    artistmatches: {
      artist: Array<Artist>
    }
  }
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
artists = [];

  newArtist = '';

  constructor(private artistService: ArtistService) { }

  async searchArtist(){
    console.log('searchArtist');
    try{
      if (this.newArtist != ''){
        const response: Response = await this.artistService.searchArtist(this.newArtist);
        console.log(response);
        this.artists = response.results.artistmatches.artist;
        this.newArtist = '';
      }
    }catch(error) {
      console.log(error);
    }
  }

  ngOnInit() {
  }

}
