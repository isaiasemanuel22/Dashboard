import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export class Loader {
  nameService!: string;
  loaderActive: boolean;
  constructor() {
    this.loaderActive = true;
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderArray: Loader[] = [];
  private loader = new Subject<Loader[]>();
  public loader$ = this.loader.asObservable();

  constructor() {}

  addLoader(nameService: string) {
    let loader = new Loader();
    loader.nameService = nameService;
    this.loaderArray.push(loader);
    this.loader.next(this.loaderArray);
  }

  changeState(nameService: string, state: boolean) {
    let loader = this.loaderArray.find(
      (loader) => loader.nameService == nameService
    );
    if (loader) {
      loader.loaderActive = state;
    }else{
      this.addLoader(nameService);
    }
    this.loader.next(this.loaderArray);
  }
}
