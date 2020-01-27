import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  wait = true;
  event;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    let eventId = this.route.snapshot.paramMap.get('id');

    this.event = await this.dataService.getEventDetails(eventId);
    this.wait = false;
  }

}
