import { SelectPlayerComponent } from "../select-player/select-player.component";
import { SelectOwnerComponent } from "../select-owner/select-owner.component";
import { IPlayer } from "../models";
import { DraftService } from "../draftService/draft.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-nominate-bar",
  templateUrl: "./nominate-bar.component.html",
  styleUrls: ["./nominate-bar.component.scss"]
})
export class NominateBarComponent implements OnInit {
  @ViewChild(SelectPlayerComponent, { static: false }) playerComponent;
  player: any = "";
  filteredPlayers: Observable<IPlayer[]>;
  constructor(private draftService: DraftService) {}

  ngOnInit() {}

  setPlayer(player) {
    this.player = player;
  }

  nominate() {
    const playerId = this.player && this.player.id ? this.player.id : null;
    const playerName =
      this.player && typeof this.player === "object"
        ? `${this.player.firstName} ${this.player.lastName}`
        : this.player;
    this.draftService.nominate(
      playerName,
      playerId,
    );

    this.player = null;
    this.playerComponent.clear();
  }
}
