import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private httpclient: HttpClient ) { 
  }


  SearchArtist(artists:string){
    const API_KEY = '291279da08301e10d6434267511d72f2';
    const API_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artists}&api_key=${API_KEY}&format=json`;
    const RESPONSE = this.httpclient.get(API_URL).toPromise();
    console.log(RESPONSE);
  }
}
