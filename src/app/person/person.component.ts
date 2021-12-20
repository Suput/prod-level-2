import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  person: Person;
  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {
    let id: number = route.snapshot.params['id'];
    this.person = peopleService.getParticipant(id);
  }

  ngOnInit(): void {}
}
