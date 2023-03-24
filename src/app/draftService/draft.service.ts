import { Players } from "./../players";
import { IPlayer } from "./../models";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";
import * as io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class DraftService {
  url = false
    ? "http://localhost:5000"
    : "https://wab-draft-tracking-app-backend.onrender.com";
  socket;
  $previousPicks = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.http
      .get<any[]>(`${this.url}/api/sample/last-picks`)
      .subscribe(picks => {
        this.$previousPicks.next(picks);
      });
    this.socket = io(this.url);
    this.socket.on("lastPicks", data => {
      this.$previousPicks.next(data);
    });
  }

  getPlayers(): Observable<IPlayer[]> {
    return of(Players);
  }

  draft(playerName, playerId, owner, amount, league) {
    this.socket.emit("draft", {
      playerName: playerName,
      playerId: playerId,
      owner: owner,
      amount: amount,
      league: league
    });
  }

  nominate(playerName, playerId) {
    this.socket.emit("nominate", {
      playerName: playerName,
      playerId: playerId,
    });
  }
}
