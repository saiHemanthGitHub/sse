import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output() buttonChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Determines whether click button on
   * @param event
   */
  public onClickButton(event) {
    this.buttonChange.emit('1');
  }

}
