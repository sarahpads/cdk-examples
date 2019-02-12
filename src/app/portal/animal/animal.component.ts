import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  @Input() public item: any;

  constructor() { }

  ngOnInit() {
  }

}
