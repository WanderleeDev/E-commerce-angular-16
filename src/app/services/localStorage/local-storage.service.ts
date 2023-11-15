import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveLocalStorage<T> (key: string, obj: T): void {
    const transformData = JSON.stringify(obj);
    const backupKey = `key-${crypto.randomUUID().slice(0,6)}`;
    const keySelected = key ? key : backupKey;

    localStorage.setItem(keySelected, transformData);
  }

  public getLocalStorage<T> (key: string): T  {
    const localData = localStorage.getItem(key);

    if (!localData) {
      throw new Error("no hay data el el localStorage");
    }
    return JSON.parse(localData)
  }
}
