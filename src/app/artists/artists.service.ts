import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private httpclient: HttpClient ) { 
  }


  getArtists(artists:string){
    const api_key = '291279da08301e10d6434267511d72f2';
    const api_url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artists}&api_key=${api_key}&format=json`;
    let response = this.httpclient.get(api_url).toPromise();
    console.log(response);
  }
}
