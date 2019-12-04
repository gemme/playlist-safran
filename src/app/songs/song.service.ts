import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  searchSong(songName: string){
    const API_KEY = "bd174abc92377d0cf673a49fd3e1d9f9";
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${songName}&api_key=${API_KEY}&format=json`;
    return this.httpClient.get(API_URL).toPromise();
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
