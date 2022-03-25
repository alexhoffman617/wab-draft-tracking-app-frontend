import { DraftService } from "./../draftService/draft.service";
import { IPlayer } from "./../models";
import { map, tap } from "rxjs/operators";
import { startWith } from "rxjs/operators";
import { Component, OnInit, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-select-player",
  templateUrl: "./select-player.component.html",
  styleUrls: ["./select-player.component.scss"]
})
export class SelectPlayerComponent implements OnInit {
  @Output() setPlayer = new EventEmitter();
  myControl = new FormControl();
  players: Array<IPlayer> = [];
  filteredPlayers: Observable<IPlayer[]>;
  constructor(private draftService: DraftService) {
    this.draftService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  ngOnInit() {
    this.filteredPlayers = this.myControl.valueChanges.pipe(
      startWith(""),
      tap(value => this.setPlayer.emit(value)),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): IPlayer[] {
    const filterValue = typeof value === "string" ? value.toLowerCase() : "";

    return this.players.filter(player => {
      let includes = true;
      if (
        this.draftService.$previousPicks.value.find(pick => {
          return pick.playerId === player.id.toString() && !!pick.owner;
        })
      ) {
        includes = false;
      }
      filterValue.split(" ").forEach(word => {
        if (
          !(
            player.firstName.toLowerCase().includes(word) ||
            player.lastName.toLowerCase().includes(word) ||
            player.firstName
              .replace(".", "")
              .replace("'", "")
              .toLowerCase()
              .includes(word) ||
            player.lastName
              .replace(".", "")
              .replace("'", "")
              .toLocaleLowerCase()
              .includes(word)
          )
        ) {
          includes = false;
        }
      });
      return includes;
    });
  }

  displayFn(player): string {
    if (!player) return "";
    return `${player.firstName} ${player.lastName}`;
  }

  clear() {
    this.myControl.setValue("");
  }
}
