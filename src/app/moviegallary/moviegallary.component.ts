import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-moviegallary',
  templateUrl: './moviegallary.component.html',
  styleUrls: ['./moviegallary.component.css']
})
export class MoviegallaryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  popular:any[];
  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/list/509ec17b19c2950a0600050d?api_key=247ca168bc9b451b305f60df048eba03&append_to_response=images')
    .subscribe((data:any[]) => {
       this.popular = data['items']
    })
  }

}
