import { Technology } from './../../models/technology.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  public technology: Technology = {
    _id: '',
    name: '',
    description: '',
    logo: '',
    tags: [],
    createdAt: null
  };
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this._httpService
        .getTechnology(id)
        .subscribe((technology: any) => (this.technology = technology.data));
    });
  }
}
