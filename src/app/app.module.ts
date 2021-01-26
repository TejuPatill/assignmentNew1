import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from "angular-datatables";
//import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttandenceComponent } from './attandence/attandence.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    AttandenceComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR-API-KEY-HERE',
    //   libraries: ['places']
    // }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
