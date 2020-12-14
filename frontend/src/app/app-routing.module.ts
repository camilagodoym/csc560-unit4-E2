import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTeamComponent } from './pages/edit-team/edit-team.component';
import { EditTeaminformationComponent } from './pages/edit-teaminformation/edit-teaminformation.component';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { NewTeaminformationComponent } from './pages/new-teaminformation/new-teaminformation.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';

const routes: Routes = [
{path: '', redirectTo: '/team', pathMatch : 'full'},
{path: 'new-team', component : NewTeamComponent},
{path: 'edit-team/:teamId', component : EditTeamComponent},
{path: 'edit-teaminformation/:teamId', component : EditTeaminformationComponent},
{path: 'team', component: TeamViewComponent},
{path: 'team/:teamId', component: TeamViewComponent},
{path: 'team/:teamId/new-teaminformation', component : NewTeaminformationComponent},
{path: 'team/:teamId/edit-teaminformation/:teaminformationId', component : EditTeaminformationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
