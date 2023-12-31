import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveLocalStorage<T> (key: string, obj: T): void {
    const transformData = JSON.stringify(obj);
    localStorage.setItem(key, transformData);
  }

  public getLocalStorage<T> (key: string): T   {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : null ?? []
  }

  public removeLocalBackup (key: string): void {
    localStorage.removeItem(key);
  }
}
