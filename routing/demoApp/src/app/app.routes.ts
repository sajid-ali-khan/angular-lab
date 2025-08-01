import { Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MygoalsComponent } from './mygoals/mygoals.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {
        path: '',
        component: HeroComponent,
        children: [
            { path: '', component: StoryComponent },
            { path: 'mystory', component: StoryComponent },
            { path: "personal-info", component: PersonalInformationComponent },
            { path: "mygoals", component: MygoalsComponent }, 
            {
                path: '**',
                component: NotFoundPageComponent,
                title: '404: Not Found'
            }
        ]
    }

];

