import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss'],
})
export class BakeryComponent implements OnInit {
  data: any;
  constructor(private datasService: DataService) {}

  ngOnInit(): void {
    this.data = this.datasService.gotData
      .pipe(map((x) => x.filter((x) => x.categories == 'boulangerie')))
      .subscribe((x) => console.log(x));
  }
}
