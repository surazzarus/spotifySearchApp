import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { SpotifyService } from './services/spotify.service';

const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
