import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectData } from 'src/app/interfaces/project-data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss'],
})
export class ArchitectureComponent implements OnInit {
  data: Observable<ProjectData[]> | undefined;
  constructor(private dataService: DataService, public auth: AuthService) {}

  ngOnInit(): void {
    this.data = this.dataService.gotData.pipe(
      map((x) => x.filter((x) => x.categories == 'architecture'))
    );
  }

  onDeleteProject(id: any) {
    return this.dataService.deleteProjects(id);
  }
}
