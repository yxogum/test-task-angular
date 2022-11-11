import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/person';
import { people as data } from 'src/app/data/people';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  people: IPerson[] = data;
  currentTab = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      switch (params['tab'].toString()) {
        case '0':
          this.currentTab = 'income';
          break;
        case '1':
          this.currentTab = 'outcome';
          break;
        case '2':
          this.currentTab = 'loan';
          break;
        case '3':
          this.currentTab = 'investment';
          break;
      }
    });
  }
}
