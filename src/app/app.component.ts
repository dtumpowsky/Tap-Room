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
      7.00,
      8.0,
      124
    ),
    new Keg(
      'Tipsy Toboggan',
      'Two Beers',
      'Winter Ale',
      9.00,
      6.5,
      105
    ),
    new Keg(
      'Summer Ale',
      'Fremont Brewing',
      'Pale Ale',
      5.00,
      5.2,
      117
    )
  ];

  selectedKeg=null;
  newKeg: Keg[] = [];


  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

//unselect keg
  finishedEditing() {
    this.selectedKeg = null;
  }

  inputKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  tapKeg(tappedKeg) {
    this.kegs.push(tappedKeg);
    this.newKeg = [];
  }


  replaceKeg(clickedKeg) {
    clickedKeg.pints = 124;
  }
//pour beer, pint incriments down by 1
  pourBeer(clickedKeg) {
    clickedKeg.pints --;
    if (clickedKeg.pints == 0) {
      alert("Keg is tapped. Please Replace Keg");
  }
}

//colors kegs that are approaching empty
  kegLevelWarning(clickedKeg) {
    if (clickedKeg.pints <= 10) {
      return "bg-danger";
    } else if (clickedKeg.pints <= 25) {
      return "bg-warning";
    }
  }
//colors items based on price
  priceIndex(clickedKeg) {
    if (clickedKeg.price <= 7) {
      return "bg-info";
    } else if (clickedKeg.price <= 10) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
//colors items based on alcohol content
  alcoholIndex(clickedKeg) {
    if (clickedKeg.alcoholContent <= 6) {
      return "bg-success";
    } else if (clickedKeg.alcoholContent <= 8) {
      return "bg-primary";
    } else {
      return "bg-warning";
    }
  }
}
