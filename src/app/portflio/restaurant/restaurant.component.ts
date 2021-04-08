import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectData } from 'src/app/interfaces/project-data';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  data: any;
  constructor(private datasService: DataService) {}

  ngOnInit(): void {
    this.data = this.datasService.gotData
      .pipe(map((x) => x.filter((x) => x.categories == 'restaurant')))
      .subscribe((x) => console.log(x));
  }
}
