import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsViewComponent } from './components/buttons-view/buttons-view.component';
import { LoadingAppViewComponent } from './components/loading-app-view/loading-app-view.component';
import { WellcomeViewComponent } from './components/wellcome-view/wellcome-view.component';
const routes: Routes = [
  { path: 'buttons', component: ButtonsViewComponent },
  { path: 'app/:app-name', component: LoadingAppViewComponent },
  { path: '**', component: WellcomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
