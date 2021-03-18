import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Byte } from '@angular/compiler/src/util';
import { IPerson } from '../objects/objects';

@Injectable()
export class ApiService {
  headers = new HttpHeaders({
    Accept: 'application/x-protobuf',
    'Content-Type': 'application/x-protobuf',
  });
  host: string = 'http://127.0.0.1:5000/';
  urlRegister: string = this.host + 'register';
  urlAll: string = this.host + 'all';

  constructor(private http: HttpClient) {}

  register(person: ArrayBuffer) {
    return this.http.post(this.urlRegister, person, {
      headers: this.headers,
      responseType: 'arraybuffer',
    });
  }

  all() {
    return this.http.get(this.urlAll, {
      headers: this.headers,
      responseType: 'arraybuffer',
    });
  }
}
