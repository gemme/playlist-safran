import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent
  },
  {
    path: 'artist/:artist',
    component: ArtistDetailsComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  }
  ,{
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
