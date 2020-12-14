import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Teaminformation } from 'src/app/models/teaminformation.model';

import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-new-teaminformation',
  templateUrl: './new-teaminformation.component.html',
  styleUrls: ['./new-teaminformation.component.scss']
})
export class NewTeaminformationComponent implements OnInit {

  constructor( private teamService: TeamService, private route: ActivatedRoute, private router: Router) { }

  teamId!: string;

  ngOnInit() {
    this.route.params.subscribe(
    (params: Params) =>{
      this.teamId = params['teamId'];
      console.log(this.teamId);
    }
    
    )}

  /*newTeaminformation!: Teaminformation;
  createTeaminformation(team: string, 
    minutes_playes: string,
    goals: string,
    assists:string,
    yellow_cards:string,
    red_card:string,
    pass:string,
    aerialsWon:string,
    man_of_the_match:string,
    rating:string,
    shots_per_game: string
     ){
       this.teamService.createTeaminformation(team, minutes_playes, goals, assists, yellow_cards, 
        red_card, pass, aerialsWon,man_of_the_match, rating, shots_per_game, this.teamId)
        .subscribe((newTeaminformation: any) =>{
          //console.log(newTeaminformation)
          this.router.navigate(['../'], { relativeTo: this.route });
        })
*/

createTeaminformation(team: string, minutes_playes: string, goals: string, assists: string, yellow_cards: string, red_card:string, pass:string, aerialsWon:string, man_of_the_match:string, rating:string, shots_per_game: string
  ){
  this.teamService.createTeaminformation(team, minutes_playes, goals, assists, yellow_cards, red_card, pass, aerialsWon, man_of_the_match, rating, shots_per_game, this.teamId)
    .subscribe((newTeaminformation: any) =>{
      //console.log(newTeaminformation)
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

}
