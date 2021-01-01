import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from './../../models/technology.model';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  technologies: Technology[] = [];
  query: string = '';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _http: HttpService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.query = params['query'];
      this._http.searchTechnology(this.query).subscribe((technologies: any) => {
        this.technologies = technologies["data"];
      });
    });
  }
}
