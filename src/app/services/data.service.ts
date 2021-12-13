import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data;

  constructor() {
    this.data = ['Apple iPhone XR', 'Samsung Galaxy S9', 'Nokia 9'];
  }

  getData() {
    return this.data;
  }

  addToData(name: string) {
    this.data.push(name);
  }
}
