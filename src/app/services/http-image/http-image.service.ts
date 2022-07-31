import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpImageService {
  constructor(private http: HttpClient) {}

  base64Url(url: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      switchMap((imageBlob) => {
        return this.createImageFromBlob(imageBlob);
      })
    );
  }

  private createImageFromBlob(imageBlob: Blob) {
    return new Observable<string>((observer) => {
      let reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          observer.next(reader.result as string);
          observer.complete();
        },
        false
      );

      if (imageBlob) {
        reader.readAsDataURL(imageBlob);
      }
    });
  }
}
