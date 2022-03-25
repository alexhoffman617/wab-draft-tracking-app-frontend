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
    const nomOwners =  Owners.filter(own => !!own.nom)
    const nomOwnerCount = nomOwners.length
    let result = nomOwners.sort((a, b) => {
      if (
        (a.nom - 1) >= (this.pickNumber - 1) % nomOwnerCount &&
        (b.nom - 1) < (this.pickNumber - 1) % nomOwnerCount
      ) {
        return -1;
      } else if (
        (a.nom - 1) < (this.pickNumber - 1) % nomOwnerCount &&
        (b.nom - 1) >= (this.pickNumber - 1) % nomOwnerCount
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
