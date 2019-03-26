import { Injectable, Injector } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService implements TranslateLoader  {

constructor(private injector: Injector) { }
getTranslation(lang: string): Observable<any> {
  const http = this.injector.get(HttpClient);
  const apiAddress = 'https://api.myjson.com/bins/u8xz6';
  return Observable.create(observer => {
    http.get(apiAddress, {}).subscribe((res: any) => {
              observer.next(res);
              observer.complete();
          },
      error => {
          //  failed to retrieve from api
      }
      );
  });
}
}
