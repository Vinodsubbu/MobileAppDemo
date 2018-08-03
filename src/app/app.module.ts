import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatCardModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { CreditComponent } from './credit/credit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
