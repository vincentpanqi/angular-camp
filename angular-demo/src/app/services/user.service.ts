import {Injectable} from '@angular/core';
import {AnalyticsImplementation, Metric} from '../user';


@Injectable()
export class UserService {
  user: any;

  setUser(newUser) {
    this.user = newUser;
  }

  getUser(): any {
    return this.user;
  }
}

@Injectable()
export class AnalyticsService {
  constructor(private implementation: AnalyticsImplementation) {}
  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}
