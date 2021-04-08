import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss'],
})
export class ArchitectureComponent implements OnInit {
  data: any;
  constructor(private datasService: DataService) {}

  ngOnInit(): void {
    this.data = this.datasService.gotData
      .pipe(map((x) => x.filter((x) => x.categories == 'architecture')))
      .subscribe((x) => console.log(x));
  }
}
