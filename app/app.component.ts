import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Person } from './person';

@Component({
    selector: 'startapp',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    persons: Person[] = [];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.httpService.getData().subscribe((data: Response) => {
            this.persons = data.json().data;
        });
    }

    addPerson(data: Person) {
        this.persons.push(data);
    }
}