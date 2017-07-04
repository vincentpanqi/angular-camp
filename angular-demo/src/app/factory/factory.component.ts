import {Component, Inject, OnInit} from '@angular/core';
import {AnalyticsService, UserService} from '../services/user.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  userName: string;
  constructor(private analyticsService: AnalyticsService,
              @Inject('API_URL') private apiUrl: string) {
  }

  ngOnInit() {
    this.analyticsService.record({
      eventName: 'componentOnInit',
      scope: 'AnalyticsDemoComponent'
    });
  }

  buyButtonPressed(product: string) {
    this.analyticsService.record({
      eventName: 'buyButtonPressed',
      scope: product
    });
  }

}
