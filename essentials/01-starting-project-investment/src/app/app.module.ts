import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { CurrencyPipe } from "@angular/common";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      InvestmentResultsComponent
    ],
    imports: [
      UserInputModule,
      CurrencyPipe],
    bootstrap: [AppComponent]
})
export class AppModule {}
