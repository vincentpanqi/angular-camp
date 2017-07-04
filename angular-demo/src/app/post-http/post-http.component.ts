import {Component, OnInit} from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

@Component({
  selector: 'app-post-http',
  templateUrl: './post-http.component.html',
})
export class PostHttpComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makePost(): void {
    this.loading = true;
    this.data = '';
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.data = '';
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeHeaders(): void {
    this.loading = true;
    this.data = '';
    const headers: Headers = new Headers();
    headers.append('X-API-TOKEN', 'ng-book');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

}
