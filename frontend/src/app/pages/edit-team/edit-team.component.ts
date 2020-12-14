import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private teamService: TeamService, private router: Router) { }
  teamId!: string;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
      this.teamId = params.teamId;
    })
  }

updateTeam(first_name: string, last_name: string){
  this.teamService.updateTeam(this.teamId, first_name, last_name).subscribe(() => {
    this.router.navigate(['/team', this.teamId]);
  })

}
}
