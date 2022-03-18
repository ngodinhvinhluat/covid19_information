import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {information} from '../model/information.model';
import {Country,CountryStatus} from '../model/country';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

const BASE_URL = `https://api.covid19api.com/`;
const COVID_URL = {
  COUNTRIES: `${BASE_URL}countries`,
  BY_COUNTRY: (country: string) => `${BASE_URL}dayone/country/${country}`,
}
@Injectable({
  providedIn: 'root'
})
export class InformationService {
  datas:information[]=[];
  constructor(private http: HttpClient,) {}
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private inforUrl = 'https://static.pipezero.com/covid/data.json';  // URL to web api
  
  public getJSON(): Observable<any> {
    return this.http.get(this.inforUrl);
  }
  sort(Country:Country[]):Country[]
  {
    return Country.sort()
  }
  getCountries$ = this.http.get<Country[]>(COVID_URL.COUNTRIES);
  getCasesByCountry = (countrySlug: string) => {
    return this.http.get<CountryStatus[]>(`${COVID_URL.BY_COUNTRY(countrySlug)}`)
  }
}
