import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArchitectureComponent } from './portflio/architecture/architecture.component';
import { BakeryComponent } from './portflio/bakery/bakery.component';
import { RestaurantComponent } from './portflio/restaurant/restaurant.component';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    ArchitectureComponent,
    BakeryComponent,
    RestaurantComponent,
    AddProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-e4qhu3di.auth0.com',
      clientId: 'a7hRFsKYD719glB2dvgxChWl5wBK1Nt2',
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
