import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  wait = true;
  events;

  constructor(
    private router: Router,
    private dataService: DataService ) { }

  async ngOnInit() {
    this.events = await this.dataService.getAllEvents();
    this.wait = false;
  }

  public details(eventId){
    this.router.navigate(['events', eventId]);
  }
}
