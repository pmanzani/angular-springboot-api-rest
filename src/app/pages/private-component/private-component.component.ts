import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-component',
  templateUrl: './private-component.component.html',
  styleUrls: ['./private-component.component.scss']
})
export class PrivateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
