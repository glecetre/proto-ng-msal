import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlassCardComponent } from './components/glass-card/glass-card.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';

@NgModule({
  declarations: [
    AppComponent,
    GlassCardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardBodyComponent,
    LoginPageComponent,
    ProfilePageComponent,
    HomePageComponent,
    ButtonLinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '96e552fc-09d5-4f6b-9961-2e04e8311928',
          authority: 'https://login.microsoftonline.com/consumers',
          redirectUri: 'http://localhost:4200',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read'],
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/*', ['user.read']],
        ]),
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
