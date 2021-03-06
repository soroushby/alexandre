import { ProjectData } from './../../interfaces/project-data';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class addProjectService {
  // Observable string sources
  private addProjectAnnouncedSource = new Subject<ProjectData>();

  // Observable string streams
  addProjectAnnounced$ = this.addProjectAnnouncedSource.asObservable();

  // Service message commands
  announceAddProject(project: ProjectData) {
    this.addProjectAnnouncedSource.next(project);
  }
}
