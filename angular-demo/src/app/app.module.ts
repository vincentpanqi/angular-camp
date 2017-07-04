import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { SearchBoxComponent } from './search-youtube/search-box.component';
import {youTubeSearchInjectables} from './youtube-search.injectables';
import { SearchResultComponent } from './search-youtube/search-result.component';
import { SearchAllComponent } from './search-youtube/search-all.component';
import { PostHttpComponent } from './post-http/post-http.component'

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    SearchAllComponent,
    PostHttpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule // <-- right here
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
