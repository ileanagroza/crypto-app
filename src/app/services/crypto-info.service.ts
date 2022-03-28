import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private baseURL = "https://api.coingecko.com/api/v3";

  constructor(private httpClient: HttpClient) { }

  public getCoinsList(vs_currency: string): Observable<any> {

    let queryParams = {'vs_currency':vs_currency, 'price_change_percentage': '1h'};
    return this.httpClient.get(`${this.baseURL}/coins/markets`, {params:queryParams});
  }

  getCoinInfo(id: string): Observable<any> {
      return this.httpClient.get(`${this.baseURL}/coins/${id}`);
  }

  getCoinsListSimple(): Observable<any> {
      return this.httpClient.get(`${this.baseURL}/simple/supported_vs_currencies`)
  }
}