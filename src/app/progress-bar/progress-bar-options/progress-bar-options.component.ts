import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProgressBarService } from '../../progress-bar-service';

@Component({
  selector: 'app-progress-bar-options',
  templateUrl: './progress-bar-options.component.html',
  styleUrls: ['./progress-bar-options.component.css']
})
export class ProgressBarOptionsComponent implements OnInit {

  @Output() public onColorChange = new EventEmitter();

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

  colours: string[] = this.progressBarService.getColors();

  changeColor(input: HTMLInputElement) {
    console.log(input.value);
    this.onColorChange.emit(input.value);
  }

}
