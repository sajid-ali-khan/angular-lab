import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';
import { MainbodyComponent } from './mainbody/mainbody.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadlineComponent, MainbodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo App';
}
