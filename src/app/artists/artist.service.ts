import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpclient: HttpClient ) { 
  }


  searchArtist(artistName:string){
    const API_KEY = '291279da08301e10d6434267511d72f2';
    const API_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${API_KEY}&format=json`;
    return this.httpclient.get(API_URL).toPromise();
  }

  getArtistDetail(artistName:string){
    const API_KEY = '291279da08301e10d6434267511d72f2';
    const API_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${artistName}&api_key=${API_KEY}&format=json`;
    return this.httpclient.get(API_URL).toPromise();
  }
}
