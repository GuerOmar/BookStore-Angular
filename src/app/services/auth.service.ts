import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

import { UserModel } from '@/models';
import { StorageKey, StorageService } from './storage.service';
import { UsersService } from './users.service';

type ConnectedUser = UserModel | undefined;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _connectedUser = new BehaviorSubject<ConnectedUser>(undefined);

  get connectedEvent$(): Observable<ConnectedUser> {
    return this._connectedUser.asObservable();
  }

  get connectedUser(): ConnectedUser {
    return this._connectedUser.value;
  }

  constructor(
    private storageService: StorageService,
    private usersService: UsersService,
    private router: Router
  ) {
    const user: ConnectedUser = this.storageService.getObj(StorageKey.User);
    this._connectedUser.next(user);
  }

  connect(email: string, password: string): Observable<boolean> {
    return this.usersService.findUser(email, password).pipe(
      map((user) => {
        this.setConnectedUser(user);
        return !!user;
      })
    );
  }

  disconnect(): void {
    this.setConnectedUser(undefined);
    this.router.navigate(['/']);
  }

  isConnected(): boolean {
    return !!this._connectedUser.value;
  }

  private setConnectedUser(user: ConnectedUser): void {
    if (user) {
      this.storageService.setObj(StorageKey.User, user);
    } else {
      this.storageService.remove(StorageKey.User);
    }

    this._connectedUser.next(user);
  }
}
