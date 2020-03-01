import { Players } from "./../players";
import { IPlayer } from "./../models";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DraftService {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<IPlayer[]> {
    return of(Players);
  }

  getPicks(): Observable<any> {
    return this.http.get(
      "https://wab-draft-app-backend.herokuapp.com/api/sample/last-picks"
      // "http://localhost:5000/api/sample/last-picks"
    );
  }

  draft(playerName, playerId, owner, amount) {
    return this.http.post(
      "https://wab-draft-app-backend.herokuapp.com/api/sample",
      // "http://localhost:5000/api/sample",
      {
        playerName: playerName,
        playerId: playerId,
        owner: owner,
        amount: amount
      }
    );
  }
}
