import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Root } from '../models/slip';

@Injectable({
  providedIn: 'root',
})
export class SlipService {
  url = 'https://api.adviceslip.com/advice';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getSlip(): Observable<Root> {
    return this.httpClient.get<Root>(this.url).pipe(retry(2));
  }
}
