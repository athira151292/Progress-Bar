import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarOptionsComponent } from './progress-bar/progress-bar-options/progress-bar-options.component';
import { ProgressBarService } from './progress-bar-service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressBarOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
