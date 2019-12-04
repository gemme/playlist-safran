import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongService } from './song.service';

interface Song {
  name: string,
  artist: string,
  url: string,
}

interface Response {
  results: {
    trackmatches: {
      track: Array<Song>
    }
  }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit, OnDestroy {

  newSong = '';
  songs: Array<Song> = null;

  constructor(private songService: SongService) {}

  ngOnInit() {}

  ngOnDestroy(){}

  searchSong(){
    console.log(this.newSong);
    this.songService.searchSong(this.newSong)
      .then(({ results }: Response) => {
        /* console.log(JSON.stringify(response))
        console.log(response) */
        this.songs = results.trackmatches.track;
        //const {trackmatches} = results;
        //this.songs = trackmatches.track;
      })
      .catch(error => console.log(error));
  }

}
