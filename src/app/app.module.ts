import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    NotFoundComponent,
    ArtistsComponent,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
