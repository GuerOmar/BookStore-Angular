import { Injectable } from '@angular/core';

export enum StorageKey {
  User = 'user',
  Locale = 'locale'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getStr(key: StorageKey): string | undefined {
    return localStorage.getItem(key) ?? undefined;
  }

  setStr(key: StorageKey, value: string): void {
    localStorage.setItem(key, value);
  }

  getObj<T>(key: StorageKey): T | undefined {
    try {
      const str = localStorage.getItem(key);
      if (str) {
        return JSON.parse(str) as T;
      }
    } catch (e) {
      console.log('localStorage error', e);
    }
    return undefined;
  }

  setObj<T>(key: StorageKey, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: StorageKey): void {
    localStorage.removeItem(key);
  }
}
