import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: Person[];
  constructor(private peopleService: PeopleService) {
    this.people = peopleService.getParticipants();
  }

  ngOnInit(): void {}
}
