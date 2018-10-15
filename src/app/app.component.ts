import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-app';
  displayedComponent: string = 'Recipes';

  showComponent(comp: string) {
    this.displayedComponent = comp;
  }
}
