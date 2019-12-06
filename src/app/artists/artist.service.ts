import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  API_KEY=environment.API_KEY;
  API_URL=environment.API_URL;

  constructor(private httpclient: HttpClient ) {
  }


  searchArtist(artistName:string){
    const SEARCH_URL = `${this.API_URL}?method=artist.search&artist=${artistName}&api_key=${this.API_KEY}&format=json`;
    return this.httpclient.get(SEARCH_URL).toPromise();
  }

  getArtistDetail(artistName:string){
    const GET_INFO_URL = `${this.API_URL}?method=artist.getInfo&artist=${artistName}&api_key=${this.API_KEY}&format=json`;
    return this.httpclient.get(GET_INFO_URL).toPromise();
  }


}
