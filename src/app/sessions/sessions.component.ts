import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  public sessions : any ; 
  public coursedisplay : any ; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService
  ) {  
  }

  ngOnInit() {
    this.coursedisplay = this.route.snapshot.paramMap.get('coursedisplay');
    this.sessions = this.ds.getSessions(this.coursedisplay);
  }
}
