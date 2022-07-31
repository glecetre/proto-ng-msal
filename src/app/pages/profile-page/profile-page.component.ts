import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styles: [],
})
export class ProfilePageComponent implements OnInit {
  pictureUrl?: string;
  user: AccountInfo | null = null;

  constructor(
    private authService: MsalService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.user = this.authService.instance.getAllAccounts()?.[0];

    this.userProfileService
      .picture()
      .subscribe((pictureUrl) => (this.pictureUrl = pictureUrl));
  }
}
