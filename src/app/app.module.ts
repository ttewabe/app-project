import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
//import { WarningAlertComponent } from './warning-alert/warning-alert.component';
//import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    //WarningAlertComponent,
    //SuccessAlertComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
