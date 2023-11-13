import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageErrorService {
  readonly remoteBackupImage = 'https://www.dropbox.com/scl/fi/ag0s3b1j2wy2201xznd0l/default.webp?rlkey=c0dsudvrx01k2900ogw5br2eq&raw=1';
  readonly localBackupImage = 'assets/img/default.png';


  public errorImageLoaded (e: Event): void {
    const imgFail = e.target as HTMLImageElement;
    this.checkImageExists(this.localBackupImage)
      .then(exists => {
        exists
          ? imgFail.src = this.localBackupImage
          : imgFail.src = this.remoteBackupImage
      })
      .catch(err => console.log(err))
      .finally(() => this.cleanImageEvent(imgFail))
  }

  private checkImageExists(url: string): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  private cleanImageEvent (img: HTMLImageElement): void {
    img.onload = null;
    img.onerror = null;
  }
}
