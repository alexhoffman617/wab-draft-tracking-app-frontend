import { Owners } from "./../conversions";
import { DraftService } from "./../draftService/draft.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nomination",
  templateUrl: "./nomination.component.html",
  styleUrls: ["./nomination.component.scss"]
})
export class NominationComponent implements OnInit {
  pickNumber = 1;
  constructor(private draftService: DraftService) {}

  ngOnInit(): void {
    this.draftService.$previousPicks.subscribe(previousPicks => {
      if (
        previousPicks.length > 0 &&
        previousPicks[0]["pickNumber"] !== "Expansion"
      ) {
        this.pickNumber = parseInt(previousPicks[0]["pickNumber"]) + 1;
      }
    });
  }

  getNominations() {
    let result = Owners.sort((a, b) => {
      if (
        a.nom >= (this.pickNumber - 1) % 10 &&
        b.nom < (this.pickNumber - 1) % 10
      ) {
        return -1;
      } else if (
        a.nom < (this.pickNumber - 1) % 10 &&
        b.nom >= (this.pickNumber - 1) % 10
      ) {
        return 1;
      } else if (a.nom > b.nom) {
        return 1;
      } else {
        return -1;
      }
    }).map(owner => owner.display);
    return result;
  }
}
