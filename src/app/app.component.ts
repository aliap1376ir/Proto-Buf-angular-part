import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/Api.service';
import { IPeople, People, Person } from './objects/objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  people: IPeople = {};
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.refresh();
  }

  submit(formValues: { name: string; age: number }): void {
    const encodedUserRequest = Person.encode({
      name: formValues.name,
      age: formValues.age,
    }).finish();
    const offset = encodedUserRequest.byteOffset;
    const length = encodedUserRequest.byteLength;
    const userRequestArrayBuffer = encodedUserRequest.buffer.slice(
      offset,
      offset + length
    );
    this.api
      .register(userRequestArrayBuffer)
      .pipe(
        map((response) => Person.decode(new Uint8Array(response))),
        catchError(this.handleError)
      )
      .subscribe((next) => {
        this.refresh();
        alert(next.id);
      });
  }

  refresh() {
    this.api
      .all()
      .pipe(
        map((response) => People.decode(new Uint8Array(response))),
        catchError(this.handleError)
      )
      .subscribe((next) => {
        this.people = next;
      });
  }

  handleError(error: any): Observable<any> {
    console.error(error);
    return throwError(error || 'Server error');
  }
}
