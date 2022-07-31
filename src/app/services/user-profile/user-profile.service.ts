import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpImageService } from 'src/app/services/http-image/http-image.service';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient, private httpImage: HttpImageService) {}

  picture() {
    return this.httpImage.base64Url(GRAPH_ENDPOINT + '/photo/$value');
  }
}
