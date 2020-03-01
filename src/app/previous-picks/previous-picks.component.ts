import { map } from "rxjs/operators";
import { IPlayer } from "./../models";
import { Observable } from "rxjs";
import { DraftService } from "./../draftService/draft.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-previous-picks",
  templateUrl: "./previous-picks.component.html",
  styleUrls: ["./previous-picks.component.scss"]
})
export class PreviousPicksComponent implements OnInit {
  $picks: Observable<any>;
  players: IPlayer[];
  constructor(private draftService: DraftService) {
    this.draftService.getPlayers().subscribe(players => {
      this.players = players;
    });
    this.$picks = this.draftService.getPicks().pipe(
      map(picks =>
        picks.map((pick, index) => {
          return { ...pick };
        })
      )
    );
    this.$picks.subscribe();
  }

  ngOnInit(): void {}

  getPlayer(playerId: string) {
    return this.players.find(player => player.id.toString() === playerId);
  }
}
