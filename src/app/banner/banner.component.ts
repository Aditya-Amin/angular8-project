import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private http: HttpClient) { }
 
  public fetured = [];
  public slug = [];
  public base_url = 'https://image.tmdb.org/t/p/w1280';

  randomId:number = Math.floor(1000 * Math.random());

  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.randomId + '?api_key=247ca168bc9b451b305f60df048eba03')
    .subscribe((data:any[]) => {
      this.fetured = data;
      this.slug = data['genres'];
    })
  }

}
