import { SelectPlayerComponent } from "./../select-player/select-player.component";
import { SelectOwnerComponent } from "./../select-owner/select-owner.component";
import { IPlayer } from "./../models";
import { DraftService } from "./../draftService/draft.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-draft-bar",
  templateUrl: "./draft-bar.component.html",
  styleUrls: ["./draft-bar.component.scss"]
})
export class DraftBarComponent implements OnInit {
  @ViewChild(SelectOwnerComponent, { static: false }) ownerComponent;
  @ViewChild(SelectPlayerComponent, { static: false }) playerComponent;
  owner: string;
  amount: string;
  player: any = "";
  filteredPlayers: Observable<IPlayer[]>;
  constructor(private draftService: DraftService) {}

  ngOnInit() {}

  setOwner(owner) {
    this.owner = owner;
  }

  setPlayer(player) {
    this.player = player;
  }

  draft() {
    const playerId = this.player && this.player.id ? this.player.id : null;
    const playerName =
      this.player && typeof this.player === "object"
        ? `${this.player.firstName} ${this.player.lastName}`
        : this.player;
    this.draftService
      .draft(playerName, playerId, this.owner, this.amount)
      .subscribe(() => {
        this.player = null;
        this.owner = "";
        this.amount = null;
        this.playerComponent.clear();
        this.ownerComponent.clear();
      });
  }
}
