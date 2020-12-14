import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { NewTeaminformationComponent } from './pages/new-teaminformation/new-teaminformation.component';
import { EditTeamComponent } from './pages/edit-team/edit-team.component';
import { EditTeaminformationComponent } from './pages/edit-teaminformation/edit-teaminformation.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamViewComponent,
    NewTeamComponent,
    NewTeaminformationComponent,
    EditTeamComponent,
    EditTeaminformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
