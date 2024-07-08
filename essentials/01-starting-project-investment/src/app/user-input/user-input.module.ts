import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./user-input.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [UserInputComponent],
    exports: [UserInputComponent],
    imports: [FormsModule, BrowserModule],
})
export class UserInputModule {}
