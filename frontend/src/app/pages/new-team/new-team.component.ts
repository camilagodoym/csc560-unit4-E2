import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
  }
 //video 7 6 minutes
  team!: Team;
  createTeam(first_name: string, last_name: string){
    this.teamService.createTeam(first_name, last_name).subscribe((team: any) => {
      console.log(team);
      //now we navigate to /tem/response._id
      this.router.navigate(['/team',team._id]);
    });
}
}