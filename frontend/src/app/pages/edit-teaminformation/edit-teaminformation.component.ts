import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-edit-teaminformation',
  templateUrl: './edit-teaminformation.component.html',
  styleUrls: ['./edit-teaminformation.component.scss']
})
export class EditTeaminformationComponent implements OnInit {


  constructor(private route: ActivatedRoute, private teamService: TeamService, private router: Router) { }

  teamId!: string;
  teaminformationId!:  string;

    ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.teaminformationId = params.teaminformationId;
        this.teamId = params.teamId;
       // console.log(params.listId);
      }
    )
  }

  /*updateTeamInformation(team: string, minutes_playes: string) {
    this.teamService.updateTeamInformation(this.teamId, this.teamInformationId, team, minutes_playes).subscribe(() => {
    this.router.navigate(['/team', this.teamId]);
    })
  }*/

  
    updateTeamInformation(team: string, minutes_playes: string, goals: string, assists: string, yellow_cards: string, 
    red_card:string, pass:string, aerialsWon:string, man_of_the_match:string, rating:string, shots_per_game: string) {
    this.teamService.updateTeamInformation(this.teamId, this.teaminformationId, team, minutes_playes, goals, assists, yellow_cards, red_card, pass, 
    aerialsWon, man_of_the_match, rating, shots_per_game).subscribe(() => {
    this.router.navigate(['/team', this.teamId]);
    })
  }
  

}
