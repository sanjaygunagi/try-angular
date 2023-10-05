import { Component } from '@angular/core';

console.log('Home Component')

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home';
}
