import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SplitSampleComponent } from "./split-sample/split-sample.component";

@Component({
  selector: "app-content-projection",
  templateUrl: "./content-projection.component.html",
  styleUrls: ["./content-projection.component.css"]
})
export class ContentProjectionComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openPopup(): void {
    const dialogRef = this.dialog.open(SplitSampleComponent, {
      width: "90vw",
      data: { main: "this is main", toolbar: "toolbar" }
    });
  }
}
