import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { track } from './track';
@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';
  url;
  searchTrack1(val:String) {
    this.url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + val + "&api_key=93145f5b301aaf8dbe74369780329041&format=json";
    //console.log( typeof this.http.get<Tracks[]>(this.url));
    return this.http.get(this.url);;
  }
  getAllTracks(){
   return this.http.get<track[]>("http://localhost:8080/musics");
  }

  updateComment(val,id){
    console.log(val);
    console.log(id);
    this.url="http://localhost:8080/music/"+id;
    return this.http.put(this.url,{
      "trackComment":val
    });
  }
  deletetrack(id){
    this.url="http://localhost:8080/music/"+id;
    return this.http.delete(this.url);

  }
}
