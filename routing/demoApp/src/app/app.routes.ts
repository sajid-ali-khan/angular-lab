import { Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MygoalsComponent } from './mygoals/mygoals.component';
export const routes: Routes = [
    {
        path: '',
        component: StoryComponent,
        title: 'My Story'
    },
    {
        path: 'story',
        component: StoryComponent,
        title: 'My Story'
    },
    {
        path: 'personal-information',
        component: PersonalInformationComponent,
        title: 'Personal Information'
    },
    {
        path: 'mygoals',
        component: MygoalsComponent,
        title: 'My Goals'
    }
];

