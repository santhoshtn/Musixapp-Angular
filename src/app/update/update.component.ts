import { SearchserviceService } from './../searchservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input()
  track
  constructor(private service: SearchserviceService,private _route: ActivatedRoute, private router: Router) { }
  comment: string;
  ngOnInit() {
  }
  update(topass) {
    this.comment = topass;
    //console.log(this.track.trackId);
    this.service.updateComment(this.comment, this.track.trackId).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {

        console.log("Error", error);
      }

    );
    this.router.navigate(['/show']);
  }
  delete(){
    this.service.deletetrack(this.track.trackId).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {

        console.log("Error", error);
      }

    );
  }
}
