import { Routes } from '@angular/router';
import { UXUIComponent } from './uxui/uxui.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    
{path: 'ux-ui', component: UXUIComponent},
{path: '', component: MainComponent},

];
