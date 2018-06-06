import { Component } from '@angular/core';
import { Keg } from './Models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tap Room';
  currentFocus: string = 'Selection';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();


  kegs: Keg[] = [
    new Keg(
      'Wonderland Trail',
      'Two Beers',
      'IPA',
      '$7.00 pt',
      '8.0%',
      124
    ),
    new Keg(
      'Tipsy Toboggan',
      'Two Beers',
      'Winter Ale',
      '$6.00 pt',
      '6.5%',
      105
    ),
    new Keg(
      'Summer Ale',
      'Fremont Brewing',
      'Pale Ale',
      '$6.00 pt',
      '5.2%',
      117
    )
  ];

  selectedKeg=null;
  selectedpint=null;
// edit Keg properties
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

//unselect keg
  finishedEditing() {
    this.selectedKeg = null;
  }

  

}
