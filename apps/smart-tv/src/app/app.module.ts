import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StandarButtonComponent } from './components/buttons-view/standar-button/standar-button.component';
import { ButtonsViewComponent } from './components/buttons-view/buttons-view.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TensorflowWebGestureModule } from 'tensorflow-web-gesture';
import { WellcomeViewComponent } from './components/wellcome-view/wellcome-view.component';
import { LoadingAppViewComponent } from './components/loading-app-view/loading-app-view.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    StandarButtonComponent,
    ButtonsViewComponent,
    WellcomeViewComponent,
    LoadingAppViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    TensorflowWebGestureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
