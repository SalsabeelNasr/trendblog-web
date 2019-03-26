/**
 * translation service to handle global language change among modules
 */

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalTranslationService {
    langChanged: EventEmitter<string> = new EventEmitter<string>();
    public constructor() {}

    setLang(langCode) {
        this.langChanged.emit(langCode);
    }

}
