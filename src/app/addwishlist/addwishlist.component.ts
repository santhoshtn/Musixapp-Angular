import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-addwishlist',
  templateUrl: './addwishlist.component.html',
  styleUrls: ['./addwishlist.component.css']
})
export class AddwishlistComponent implements OnInit {
  @Input()
  trackname
  @Input()
  trackartist
  @Input()
  trackurl
  @Input()
  id
  

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  savedb()
  { console.log(+this.id);
    console.log(this.trackname);
    console.log(this.trackartist);
    console.log(this.trackurl);
    this.httpClient.post("http://localhost:8080/music",
    {
      "trackId": +this.id,
      "trackName": this.trackname,
      "trackComment": "",
      "trackArtist":this.trackartist,
      "imageUrl":this.trackurl
  }, 
  {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  })
.subscribe(
data  => {
console.log("POST Request is successful ", data);
},
error  => {

console.log("Error", error);

}

);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
