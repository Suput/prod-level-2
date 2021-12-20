import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  personGroup: FormGroup;
  constructor(private peopleService: PeopleService) {
    this.personGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      challengeName: new FormControl('', [Validators.required]),
      place: new FormControl(0, [Validators.required]),
      isWinner: new FormControl(false, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  create() {
    console.log(this.personGroup.value);
    this.peopleService.addParticipant(
      this.personGroup.controls['name'].value,
      this.personGroup.controls['surname'].value,
      this.personGroup.controls['challengeName'].value,
      this.personGroup.controls['place'].value,
      this.personGroup.controls['isWinner'].value
    );
  }
}
