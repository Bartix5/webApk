import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBasicComponent } from './nav-basic/nav-basic.component';
import { PanelLogComponent } from './panel-log/panel-log.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBasicComponent,
    PanelLogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
