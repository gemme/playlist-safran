import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArtistService } from '../artists/artist.service';

interface Params {
  params: {
    artist: string;
  }
}

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  artistName = '';

  artist: any = [];
  urlArtist: any = [];

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(({params}: any) => {
      this.artistName = params.artist;
    })

    this.artistService.getArtistDetails(this.artistName)
    .then(({artist}: any) => {
      
      this.artist = artist;
      this.urlArtist = artist.image[4]['#text'];
    })
    .catch(error => console.log(error));
  }
  

}