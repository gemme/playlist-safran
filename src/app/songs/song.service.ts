import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  API_KEY = environment.API_KEY;
  API_URL = environment.API_URL;
  constructor(private httpClient: HttpClient) { }

  searchSong(songName: string){
    const SEARCH_URL = `${this.API_URL}?method=track.search&track=${songName}&api_key=${this.API_KEY}&format=json`;
    return this.httpClient.get(SEARCH_URL).toPromise();
    /* return [{
      name: 'Seek and destroy',
      artist: 'metallica',
      url: 'http://last.fm'
    },{
      name: 'Incondicional',
      artist: 'luis miguel',
      url: 'http://last.fm'
    },{
      name: 'Amanda',
      artist: 'Boston',
      url: 'http://last.fm'
    },{
      name: 'Quiero mas cerveza',
      artist: 'Wendy Sulca',
      url: 'http://last.fm'
    },{
      name: 'Santa claus llego a la ciudad',
      artist: 'Luis Miguel',
      url: 'http://last.fm'
    },{
      name: 'Have you ever seen the rain?',
      artist: 'Credence',
      url: 'http://last.fm'
    }]
  } */
  }
}
