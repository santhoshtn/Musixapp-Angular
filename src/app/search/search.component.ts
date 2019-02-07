import { SearchserviceService } from './../searchservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchdata;
  public trackname;

  // topass1: String;
  constructor(private service: SearchserviceService, public _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.trackname = this._route.snapshot.paramMap.get('trackname');
    this.service.searchTrack1(this.trackname).subscribe((data) => {
      // console.log("incoming data is ", data['results']['trackmatches']['track']);
      this.searchdata = data['results']['trackmatches']['track'];


    });
  }
  // Search(topass) {
  //   this.topass1=topass;

  //   this.service.searchTrack1(this.topass1).subscribe((data) => {
  //     // console.log("incoming data is ", data['results']['trackmatches']['track']);
  //     this.searchdata=data['results']['trackmatches']['track'];


  //   });
  // }
  geturl(search) {
    return search['image'][3]['#text'];
  }

}
