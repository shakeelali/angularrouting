import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-session-content',
  templateUrl: './session-content.component.html',
  styleUrls: ['./session-content.component.css']
})
export class SessionContentComponent implements OnInit {

  public sessiondisplay : any ; 
  public coursedisplay : any ; 
  public session : any ; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService
  ) {  
  }

  ngOnInit() {
    this.coursedisplay = this.route.snapshot.paramMap.get('coursedisplay');
    this.sessiondisplay = this.route.snapshot.paramMap.get('sessiondisplay');
    this.session = this.ds.getSessionContent(this.coursedisplay, this.sessiondisplay);
  }
}
