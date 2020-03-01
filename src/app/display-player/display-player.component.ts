import { IPlayer } from "./../models";
import { Component, OnInit, Input } from "@angular/core";
import { getPositions, getProTeam } from "../conversions";
@Component({
  selector: "app-display-player",
  templateUrl: "./display-player.component.html",
  styleUrls: ["./display-player.component.scss"]
})
export class DisplayPlayerComponent implements OnInit {
  @Input() player: IPlayer;
  constructor() {}

  ngOnInit(): void {}

  playerImg(): string {
    return `https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/${this.player.id}.png&h=120&w=120&scale=crop`;
  }

  getPositionDisplay() {
    return getPositions(this.player.eligibleSlots)[0];
  }

  getTeamDisplay() {
    return getProTeam(this.player.proTeamId).name;
  }
}
