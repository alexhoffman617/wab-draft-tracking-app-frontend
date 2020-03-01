import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DraftPageComponent } from "./draft-page/draft-page.component";

const routes: Routes = [{ path: "**", component: DraftPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
