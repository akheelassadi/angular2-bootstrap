import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdButtonsCheckbox } from './buttons-checkbox';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NgbdButtonsCheckbox
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
