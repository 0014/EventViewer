import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransitionComponent } from './transition/transition.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventsComponent,
    TransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
        { path: '', component: EventsComponent },
        { path: 'events', component: EventsComponent },
        { path: 'events/:id', component: EventDetailsComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
