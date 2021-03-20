import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Byte } from '@angular/compiler/src/util';
import { IPerson, People, Person } from '../objects/objects';

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

  register(person: IPerson) {
    const encodedPerson = Person.encode(person).finish();
    const offset = encodedPerson.byteOffset;
    const length = encodedPerson.byteLength;
    const personArrayBuffer = encodedPerson.buffer.slice(
      offset,
      offset + length
    );
    return this.http
      .post(this.urlRegister, personArrayBuffer, {
        headers: this.headers,
        responseType: 'arraybuffer',
      })
      .pipe(map((response) => Person.decode(new Uint8Array(response))));
  }

  all() {
    return this.http
      .get(this.urlAll, {
        headers: this.headers,
        responseType: 'arraybuffer',
      })
      .pipe(map((response) => People.decode(new Uint8Array(response))));
  }
}
