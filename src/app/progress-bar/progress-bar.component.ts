import { Component, OnInit, Input } from '@angular/core';

import { ProgressBarService } from '../progress-bar-service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() public progress;
  selectedColor;

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

  onSelectColor(color) {
    console.log(color);
    this.selectedColor = color;
  }

}
