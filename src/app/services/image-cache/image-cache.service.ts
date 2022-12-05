import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface CachedImage {
  url: string;
  blob: Blob;
}

@Injectable({
  providedIn: 'root'
})
export class ImagesCacheService {
  private REST_API_SERVER = environment.apiUrl + 'api';

  private _cacheUrls: string[] = [];
  private _cachedImages: CachedImage[] = [];

  constructor(private http: HttpClient) { }

  set cacheUrls(urls: string[]) {
    this._cacheUrls = [...urls];
  }

  get cacheUrls(): string[] {
    return this._cacheUrls;
  }

  set cachedImages(image: CachedImage) {
    this._cachedImages.push(image);
  }

  getImage(url: string): Observable<any> {
    const index = this._cachedImages.findIndex(image => image.url === url);
    if (index > -1) {
      const image = this._cachedImages[index];
      //return of(URL.createObjectURL(image.blob));
      return of(image.blob);
    }

    return this.http.post(this.REST_API_SERVER + '/multimedia/image',{url: url}, { responseType: 'blob' }).pipe(
      tap(blob => this.checkAndCacheImage(url, blob))
    );
  }

  checkAndCacheImage(url: string, blob: Blob) {
    if (this._cacheUrls.indexOf(url) > -1) {
      this._cachedImages.push({url, blob});
    }
  }

  blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

}
