import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artists/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  artistName = '';
  artist = [];
  urlArtist='';

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(({params}: any) => {
      this.artistName = params.artist;
    });
    // service call
    this.artistService.getArtistDetail(this.artistName)
      .then(({artist}: any) => {
        //console.log(response);
        this.artist = artist;
        this.urlArtist = artist.image[3]['#text'];
      })
      .catch(error => console.log(error));
  }

}
