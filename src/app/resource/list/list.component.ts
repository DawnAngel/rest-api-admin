import { AfterViewInit, Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ModelService } from '@app/core/services/model.service';
import { Model } from '@model/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<any>;
  resource: string;
  model: Model;

  constructor(private route: ActivatedRoute, private router: Router, private models: ModelService) {}

  private init({ resource }: Params) {
    console.log(this.models.has(this.resource));
    if (!this.models.has(this.resource)) {
      this.router.navigate(['/']);
      return;
    }
    this.resource = resource;
    this.model = this.models.get(resource);

    this.dataSource = new MatTableDataSource([
      { id: 1, name: 'test1', progress: '10', color: 'red' },
      { id: 2, name: 'test2', progress: '20', color: 'green' },
      { id: 3, name: 'test3', progress: '30', color: 'blue' },
    ]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.init(params));
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    console.log(this.paginator);
    console.log(this.sort);
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }
}
