import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FooterComponent} from "../../components/footer/footer.component";

@NgModule({
  declarations: [FooterComponent],
  imports     : [BrowserModule],
  exports     : [FooterComponent],
})

export class FooterModule {}