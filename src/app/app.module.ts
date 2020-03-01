import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DraftPageComponent } from "./draft-page/draft-page.component";
import { HttpClientModule } from "@angular/common/http";
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { SelectPlayerComponent } from './select-player/select-player.component';
import { SelectOwnerComponent } from './select-owner/select-owner.component';
import { DraftBarComponent } from './draft-bar/draft-bar.component';
import { PreviousPicksComponent } from './previous-picks/previous-picks.component';

@NgModule({
  declarations: [AppComponent, DraftPageComponent, DisplayPlayerComponent, SelectPlayerComponent, SelectOwnerComponent, DraftBarComponent, PreviousPicksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
