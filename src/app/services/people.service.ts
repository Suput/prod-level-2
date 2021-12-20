import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: Person[];
  constructor() {
    this.people = [
      {
        id: 0,
        name: 'Ivan',
        surname: 'Ivanov',
        challengeName: 'Ice bucket',
        place: 3,
        isWinner: false,
      },
      {
        id: 1,
        name: 'Ivan2',
        surname: 'Ivanov2',
        challengeName: 'Ice bucket',
        place: 2,
        isWinner: false,
      },
      {
        id: 2,
        name: 'Ivan3',
        surname: 'Ivanov3',
        challengeName: 'Ice bucket',
        place: 1,
        isWinner: true,
      },
      {
        id: 3,
        name: 'Vasya',
        surname: 'Smirnov',
        challengeName: 'Rally',
        place: 1,
        isWinner: true,
      },
    ];
  }

  getParticipants() {
    return this.people;
  }

  addParticipant(
    name: string,
    surname: string,
    challengeName: string,
    place: number,
    isWinner: boolean
  ) {
    let lastParticipant = this.people[this.people.length - 1];
    let newId = lastParticipant.id + 1;

    this.people.push({
      id: newId,
      name: name,
      surname: surname,
      challengeName: challengeName,
      place: place,
      isWinner: isWinner,
    });
  }

  getParticipant(index: number) {
    return this.people[index];
  }
}
