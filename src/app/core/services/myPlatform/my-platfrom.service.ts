import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPlatfromService {

  constructor(@Inject(PLATFORM_ID) private platformId : object) { }

  // this method to return true or false based on the server or the browser
  getPlatform() : boolean
  {
    if(isPlatformBrowser(this.platformId)){
      return true
    }

    return false
  }
}
