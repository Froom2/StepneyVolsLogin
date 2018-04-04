import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeScreenComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
