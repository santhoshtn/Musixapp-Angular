import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-presearch',
  templateUrl: './presearch.component.html',
  styleUrls: ['./presearch.component.css']
})
export class PresearchComponent implements OnInit {
  trackname: string;
  constructor(private _route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
  }
  search(): any {
    console.log('trackname : ' + this.trackname);
    this.router.navigate(['/searchtrack', this.trackname]);
  }
}
