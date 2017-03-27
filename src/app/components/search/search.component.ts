import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchResult: Artist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchResult = res.artists.items;
      })
  }

}
