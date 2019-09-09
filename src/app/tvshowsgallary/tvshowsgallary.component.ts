import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tvshowsgallary',
  templateUrl: './tvshowsgallary.component.html',
  styleUrls: ['./tvshowsgallary.component.css']
})
export class TvshowsgallaryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  popular:any[];
  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=247ca168bc9b451b305f60df048eba03&language=en-US&page=1')
    .subscribe((data:any[]) => {
       this.popular = data['results']
    })
  }

}
