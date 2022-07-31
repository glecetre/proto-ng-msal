import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [MsalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
