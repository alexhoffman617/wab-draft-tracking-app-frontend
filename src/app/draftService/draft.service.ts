import { IPlayer } from "./../models";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DraftService {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>("http://localhost:3000/players");
  }

  getPicks(): Observable<any> {
    return this.http.get("http://localhost:3000/picks");
  }

  draft(playerName, playerId, owner, amount) {
    this.http
      .post("http://localhost:5000/api/sample", {
        pickNumber: 11,
        playerName: playerName,
        playerId: playerId,
        owner: owner,
        amount: amount
      })
      .subscribe();
    return this.http.post("http://localhost:3000/picks", {
      playerName: playerName,
      playerId: playerId,
      owner: owner,
      amount: amount
    });
  }
}
