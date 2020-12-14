import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { Teaminformation } from 'src/app/models/teaminformation.model';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  team!: Team[];
  teamInformation!: Teaminformation[];
  selectedTeamId!: string;

  constructor(private teamService: TeamService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        if(params.teamId){
        console.log(params);
        this.selectedTeamId = params.teamId;
        this.teamService.getTeamInformation(params.teamId).subscribe((teamInformation : any) =>{
        this.teamInformation=teamInformation;
        })
      } else {
       this.teamInformation;
      }
      }
    )

    this.teamService.getTeam().subscribe((team: any) => {
    this.team=team;
    //  console.log(team);

  })
}


onDeleteTeamClick(){
 this.teamService.deleteTeam(this.selectedTeamId).subscribe((res: any) => {
   this.router.navigate(['/team']);
   console.log(res);
 })
}


onDeleteTeamInformationClick(id: string){
  this.teamService.deleteTeamInformation(this.selectedTeamId, id).subscribe((res: any) => {
    //this.router.navigate(['/team']);
    this.teamInformation = this.teamInformation.filter(val => val._id !==id);
    console.log(res);
    });
    //the previous line is not accepting undefining values. So I just redirected to /team
    
  }
}
