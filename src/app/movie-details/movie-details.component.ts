import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private sanitizer: DomSanitizer) { }

  public key = this.route.snapshot.paramMap.get('id');
  public youtube = 'https://www.youtube.com/embed/'+this.key;
  
  getEmbed(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube);
  }
  
  ngOnInit() {
   console.log(this.key);
  }

}
