import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gird',
  templateUrl: './gird.component.html',
  styleUrls: ['./gird.component.scss']
})
export class GirdComponent implements OnInit {

  public loop:any=[ '1','2','3','4','5','6','7','8','9','10'];
  constructor() { }

  ngOnInit(): void {
  }

}
