import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

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
  }
}
