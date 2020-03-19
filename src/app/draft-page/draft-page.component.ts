import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-draft-page",
  templateUrl: "./draft-page.component.html",
  styleUrls: ["./draft-page.component.scss"]
})
export class DraftPageComponent implements OnInit {
  showDraftBar = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (
      this.route.snapshot.queryParams.secret &&
      this.route.snapshot.queryParams.secret.toLowerCase() === "admin"
    ) {
      this.showDraftBar = true;
    }
  }
}
