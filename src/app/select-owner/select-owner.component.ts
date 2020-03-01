import { Owners } from "./../conversions";
import { map, tap } from "rxjs/operators";
import { startWith } from "rxjs/operators";
import { Component, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-select-owner",
  templateUrl: "./select-owner.component.html",
  styleUrls: ["./select-owner.component.scss"]
})
export class SelectOwnerComponent implements OnInit {
  @Output() setOwner = new EventEmitter();
  myControl = new FormControl();
  owners: Array<string> = Owners;
  filteredOwners: Observable<string[]>;
  constructor() {}

  ngOnInit() {
    this.filteredOwners = this.myControl.valueChanges.pipe(
      startWith(""),
      tap(value => this.setOwner.emit(value)),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = typeof value === "string" ? value.toLowerCase() : "";

    return this.owners.filter(owner => {
      let includes = true;
      filterValue.split(" ").forEach(word => {
        if (
          !(
            owner.toLowerCase().includes(word) ||
            owner.toLowerCase().includes(word)
          )
        ) {
          includes = false;
        }
      });
      return includes;
    });
  }

  displayFn(owner): string {
    return owner;
  }

  clear() {
    this.myControl.setValue("");
  }
}
