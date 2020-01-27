import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  async getAllEvents(): Promise<any[]>{
    let events;

    await this.http
      .get('https://localhost:44395/api/events')
      .toPromise()
      .then(response => {
        console.log('events', response);
        events = response;
    });

    return events;
  }

  async getEventDetails(id): Promise<any[]>{
    let event;

    await this.http
      .get('https://localhost:44395/api/events/' + id)
      .toPromise()
      .then(response => {
        console.log('details', response);
        event = response;
    });

    return event;
  }
}
