import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/Api.service';
import { IPeople, IPerson, People, Person } from './objects/objects';

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
    let person: IPerson = {
      name: formValues.name,
      age: formValues.age,
    };
    this.api.register(person).subscribe((next) => {
      this.refresh();
      alert(next.id);
    });
  }

  refresh() {
    this.api.all().subscribe((next) => {
      this.people = next;
    });
  }
}
