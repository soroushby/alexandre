import { ArchitectureComponent } from './portflio/architecture/architecture.component';
import { BakeryComponent } from './portflio/bakery/bakery.component';
import { RestaurantComponent } from './portflio/restaurant/restaurant.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'boulangerie', component: BakeryComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
