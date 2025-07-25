import { Component } from '@angular/core';
import { StoryComponent } from '../story/story.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';

@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [StoryComponent, PersonalInformationComponent],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css'
})
export class MainbodyComponent {

}
