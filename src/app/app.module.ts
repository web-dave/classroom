import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkshopRoutingModule } from './routing.module';
import { LabsComponent } from './labs/labs.component';
import { NavComponent } from './nav/nav.component';
import { PreparationComponent } from './preparation/preparation.component';
import { InitComponent } from './init/init.component';
import { NaviComponent } from './navi/navi.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SearchComponent } from './search/search.component';
import { RoutingComponent } from './routing/routing.component';
import { ArtistComponent } from './artist/artist.component';
import { InoutComponent } from './inout/inout.component';
import { AlbumComponent } from './album/album.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LabsComponent,
    NavComponent,
    PreparationComponent,
    InitComponent,
    NaviComponent,
    SpotifyComponent,
    SearchComponent,
    RoutingComponent,
    ArtistComponent,
    InoutComponent,
    AlbumComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WorkshopRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
