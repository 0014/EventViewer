import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://localhost:44395';

  constructor(private http: HttpClient) { }

  async getAllEvents(): Promise<any[]>{
    let events;

    await this.http
      .get(this.baseUrl + '/api/events')
      .toPromise()
      .then(response => {
        events = response;
    });

    return events;
  }

  async getEventDetails(id): Promise<any[]>{
    let event;

    await this.http
      .get(this.baseUrl + '/api/events/' + id)
      .toPromise()
      .then(response => {
        event = response;
    });

    return event;
  }
}
