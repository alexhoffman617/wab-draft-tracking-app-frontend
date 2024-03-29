import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";

const materialModules = [
  LayoutModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
