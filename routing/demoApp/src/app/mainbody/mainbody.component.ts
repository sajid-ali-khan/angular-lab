import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { StoryComponent } from '../story/story.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';

@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [RouterOutlet, StoryComponent, PersonalInformationComponent],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css'
})
export class MainbodyComponent {

}
