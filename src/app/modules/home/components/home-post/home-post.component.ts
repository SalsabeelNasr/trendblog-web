import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.scss']
})
export class HomePostComponent implements OnInit {
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
