import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private webReqService: WebRequestService) { }

  getTeam(){
    return this.webReqService.get('team');
  }
  
  createTeam(first_name: string, last_name: string){
   return this.webReqService.post('team', {first_name, last_name});
  }

  updateTeam(id: string, first_name: string, last_name: string){
    return this.webReqService.patch(`team/${id}`, {first_name, last_name});
   }

  deleteTeam(id: string){
    return this.webReqService.delete(`team/${id}`);

  }

  deleteTeamInformation(teamId: string, teaminformationId: string){
    return this.webReqService.delete(`team/${teamId}/teaminformation/${teaminformationId}`);

  }

  getTeamInformation(teamId: string){
    return this.webReqService.get(`team/${teamId}/teaminformation`);
  }

   createTeaminformation(team:string, minutes_playes:string, goals: string, assists:string, yellow_cards: string, red_card:string,pass:string, aerialsWon:string, man_of_the_match:string, rating:string, shots_per_game: string, teamId:string){
    return this.webReqService.post(`team/${teamId}/teaminformation`,
    {team, minutes_playes, goals, assists, yellow_cards, red_card, pass, aerialsWon, man_of_the_match, rating, shots_per_game});

   }

   updateTeamInformation(teamId: string, teaminformationId: string, team:string, minutes_playes:string, goals: string, assists:string, yellow_cards: string, red_card:string,pass:string, aerialsWon:string, man_of_the_match:string, rating:string, shots_per_game: string ){
    return this.webReqService.patch(`team/${teamId}/teaminformation/${teaminformationId}`,
    {team, minutes_playes, goals, assists, yellow_cards, red_card, pass, aerialsWon, man_of_the_match, rating, shots_per_game});

  

  /* updateTeamInformation(teamId: string, teamInformationId: string, team:string, minutes_playes:string ){
    return this.webReqService.post(`team/${teamId}/teaminformation/${teamInformationId}`, {team, minutes_playes});*/

   }


}
