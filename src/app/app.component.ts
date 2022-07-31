import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  user: AccountInfo | null = null;

  constructor(private authService: MsalService) {}

  ngOnInit(): void {
    this.user = this.authService.instance.getAllAccounts()?.[0];

    console.log(this.user);
  }
}
