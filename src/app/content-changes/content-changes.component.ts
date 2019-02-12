import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-changes',
  templateUrl: './content-changes.component.html',
  styleUrls: ['./content-changes.component.scss']
})
export class ContentChangesComponent implements OnInit {
  public counter: number = 0;
  public item: string;

  private interval;
  private items: Array<string> = ["Pie", "Waffles", "Puppies", "Sleep", "Wine"];

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.item = this.items[Math.floor(Math.random() * this.items.length)];
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  public onContentChange(event) {
    this.counter++;
  }
}
