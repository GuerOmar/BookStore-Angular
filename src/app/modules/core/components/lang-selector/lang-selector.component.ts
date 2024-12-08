import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { StorageKey, StorageService } from '@/services/storage.service';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss'
})
export class LangSelectorComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  locale: FormControl;

  constructor(
    private storageService: StorageService,
    private translate: TranslateService
  ) {
    const defLocale = this.storageService.getStr(StorageKey.Locale) ?? 'fr';
    this.locale = new FormControl(defLocale);
    this.translate.use(defLocale);
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.locale.valueChanges.subscribe((locale) => {
        this.changeLocale(locale);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private changeLocale(locale: string): void {
    this.storageService.setStr(StorageKey.Locale, locale);
    this.translate.use(locale);
  }
}
