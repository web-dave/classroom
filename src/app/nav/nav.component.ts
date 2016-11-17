import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeRoute: string;
  constructor(private router: Router) { 
  }
  setActiveLink(e) {
    this.activeRoute = e;
    this.router.navigate([`/${e}`]);
  }

  ngOnInit() {
    this.activeRoute = window.location.pathname.substr(1);
  }

}
