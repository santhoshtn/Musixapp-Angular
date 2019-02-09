import { SearchserviceService } from './../searchservice.service';
import { Component, OnInit, Input,AfterContentChecked,AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ShowNavwishlistComponent } from './../show-navwishlist/show-navwishlist.component'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input()
  track
  constructor(private service: SearchserviceService,private show: ShowNavwishlistComponent,private _route: ActivatedRoute, private router: Router) { }
  comment: string;
  ngOnInit() {
  }
  update(topass) {
    this.comment = topass;
    //console.log(this.track.trackId);
    this.service.updateComment(this.comment, this.track.trackId).subscribe(
      data => {
        console.log("POST Request is successful ", data);
          // this.router.navigate(['/show']);
      },
      error => {

        console.log("Error", error);
      }
      
    );
    // this.show.gettracks();
    // this.router.navigate(['/red']);
  }
  delete(){
    this.service.deletetrack(this.track.trackId).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigate(['/show']);
      },
      error => {

        console.log("Error", error);
      }
      
    );
    // this.show.gettracks();
  }
  ngAfterViewChecked(){
  //   window.location.reload();

  }
}
