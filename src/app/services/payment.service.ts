import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = 'http://httpbin.org/delay/';
  constructor(private http: HttpClient) { }

  processPayment(cardNumber: string, delaySeconds: number): Observable<any> {
    const apiUrl = this.baseUrl + delaySeconds;
    const startTime = performance.now();
    const encryptedData = this.encryptData({ cardNumber });

    return new Observable(observer => {
      this.http.post(apiUrl, { encryptedData }).subscribe(
        response => {
          const endTime = performance.now();
          const responseTime = endTime - startTime;
          observer.next(responseTime);
          console.log(response);
          observer.complete();
          console.log('Tiempo de respuesta:', responseTime, 'milisegundos');
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  private encryptData(data: any): any {
    const key = CryptoJS.enc.Utf8.parse('1sre6-sdfe26-99www');
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString();
  }
}
