import { Owners } from "./../conversions";
import { DraftService } from "./../draftService/draft.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nomination",
  templateUrl: "./nomination.component.html",
  styleUrls: ["./nomination.component.scss"]
})
export class NominationComponent implements OnInit {
  $nominationOrder;
  constructor(private draftService: DraftService) {}

  ngOnInit(): void {
    this.$nominationOrder = this.draftService.$nominationOrder
  }
}
