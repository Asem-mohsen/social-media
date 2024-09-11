import { MyPlatfromService } from './../myPlatform/my-platfrom.service';
import { Injectable,Inject , PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {

  constructor(private _MyPlatfromService : MyPlatfromService) {}

  loadFlowbite(callback: (flowbite: any) => void) {
    if (this._MyPlatfromService.getPlatform()) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }
}
