import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  resource: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.init(params));
  }

  private init({ resource }: Params) {
    this.resource = resource;
  }

}
