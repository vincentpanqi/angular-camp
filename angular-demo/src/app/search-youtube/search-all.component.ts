import { Component, OnInit } from '@angular/core';
import {SearchResult} from '../models/search-result.model';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
})
export class SearchAllComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }
  ngOnInit() { }

  // 没有用双向绑定，所以要监听事件后手动刷新结果
  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}
