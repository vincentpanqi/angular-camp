import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imported here
import {UserService, AnalyticsService} from './services/user.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FactoryComponent} from './factory/factory.component';
import {AnalyticsImplementation, Metric} from './user';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FactoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [
    UserService,
    { provide: 'API_URL', useValue: 'http://my.api.com/v1' },
    {
      provide: AnalyticsService,
      useFactory() {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
