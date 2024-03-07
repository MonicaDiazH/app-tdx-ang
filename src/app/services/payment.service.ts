import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = 'http://httpbin.org/delay/';
  constructor(private http: HttpClient) { }

  processPayment(cardNumber: string, delaySeconds: number): Observable<any> {
    const apiUrl = this.baseUrl + delaySeconds;
    const startTime = performance.now();

    return new Observable(observer => {
      this.http.post(apiUrl, { cardNumber }).subscribe(
        response => {
          const endTime = performance.now();
          const responseTime = endTime - startTime;
          observer.next(responseTime);
          observer.complete();
          console.log('Tiempo de respuesta:', responseTime, 'milisegundos');
        },
        error => {
          observer.error(error);
        }
      );
    });
  }
}
