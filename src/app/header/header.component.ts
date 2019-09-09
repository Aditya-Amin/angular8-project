import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }
  keyword:string = '';
  movies:any[];
  found:boolean;


  
  onNameKeyUp(event:any){
   this.keyword = event.target.value;
   this.found = false;
  }

  fetchMovies(){
    this.http.get('https://api.themoviedb.org/3/search/movie?api_key=247ca168bc9b451b305f60df048eba03&query='+this.keyword)
   .subscribe(
     (data:any[]) =>{
       if(data['results'].length){
         this.movies = data['results'];
         this.found = true;
       }
     })
  }

  getKey(ID:any){
    this.http.get('https://api.themoviedb.org/3/movie/'+ID+'?api_key=247ca168bc9b451b305f60df048eba03&language=en-US&append_to_response=videos,images')
   .subscribe(
     (data:any[]) =>{
        this.router.navigate(['/movie-details/', data['videos'].results[0].key]);
        this.found = false;
     })
  }

  ngOnInit() {
  }

}
