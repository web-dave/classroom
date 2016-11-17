import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparationComponent } from './preparation/preparation.component';
import { PipeComponent } from './pipe/pipe.component';
import { AlbumComponent } from './album/album.component';
import { InoutComponent } from './inout/inout.component';
import { ArtistComponent } from './artist/artist.component';
import { RoutingComponent } from './routing/routing.component';
import { SearchComponent } from './search/search.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { NaviComponent } from './navi/navi.component';
import { InitComponent } from './init/init.component';


const routes: Routes = [

  { path: 'preparation', component: PreparationComponent },
  { path: 'init', component: InitComponent },
  { path: 'nav', component: NaviComponent },
  { path: 'spotify', component: SpotifyComponent },
  { path: 'search', component: SearchComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'artist', component: ArtistComponent},
  { path: 'inout', component: InoutComponent},
  { path: 'album', component: AlbumComponent},
  { path: 'pipe', component: PipeComponent},

  { path: '**', redirectTo: '/preparation' }

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

  providers: []

})

export class WorkshopRoutingModule { }