import { Component, OnInit, Input } from '@angular/core';
import { IInstrument } from './../engine/machine-interfaces';

@Component({
  selector: 'bm-instrument-tile',
  templateUrl: './instrument-tile.component.html',
  styleUrls: ['./instrument-tile.component.css']
})
export class InstrumentTileComponent implements OnInit {
  @Input() instrument: IInstrument;
  private previousVolume = 0;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.instrument.enabled) {
      this.previousVolume = this.instrument.volume;
      this.instrument.volume = 0;
    } else if (this.previousVolume > 0) {
      this.instrument.volume = this.previousVolume;
    }
    this.instrument.enabled = !this.instrument.enabled;
  }
}
