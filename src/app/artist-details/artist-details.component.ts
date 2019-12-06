import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { ArtistService } from '../artists/artist.service';

// interface Params{
//   params:{
//     artist:string
//   }
// }

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artist = [];
  artistName = '';
  urlartist = '';
  bio = '';

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((response: any) => {
      this.artistName = response.params.artist;
    });

    this.artistService.getArtistDetail(this.artistName)
    .then(({artist}: any ) => {
      this.artist = artist;
      this.urlartist = artist.image[1]['#text'];
    })
    .catch(error => console.log(error)) ;
  }

}
