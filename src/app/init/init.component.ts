import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  private hint: boolean;
  constructor() {
    this.hint = false;
   }

  ngOnInit() {
  }

}
