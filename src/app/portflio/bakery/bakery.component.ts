import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectData } from 'src/app/interfaces/project-data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss'],
})
export class BakeryComponent implements OnInit {
  data: Observable<ProjectData[]> | undefined;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.gotData.pipe(
      map((x) => x.filter((x) => x.categories == 'boulangerie'))
    );
  }

  onDeleteProject(id: any) {
    return this.dataService.deleteProjects(id);
  }
}
