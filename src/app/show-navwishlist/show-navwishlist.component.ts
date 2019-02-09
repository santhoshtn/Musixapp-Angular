import { Component, OnInit } from '@angular/core';
import {SearchserviceService} from '../searchservice.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-show-navwishlist',
  templateUrl: './show-navwishlist.component.html',
  styleUrls: ['./show-navwishlist.component.css']
})
export class ShowNavwishlistComponent implements OnInit {

  constructor(private service:SearchserviceService) { }
  alltracks=[];
  ngOnInit() {
    this.service.getAllTracks().subscribe((data)=>{this.alltracks=data})
  }
  gettracks(){
    this.service.getAllTracks().subscribe((data)=>{this.alltracks=data})
  }
}
