import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { from, Observable } from 'rxjs';
import { ProjectData } from '../interfaces/project-data';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}

  addProject(project: ProjectData): Observable<DocumentReference<any>> {
    return from(this.db.collection('projects').add({ ...project }));
  }

  deleteProjects(id: any) {
    return this.db.collection('projects').doc(id).delete();
  }

  gotData = this.db
    .collection('projects')
    .snapshotChanges()
    .pipe(
      map((projectsData) =>
        projectsData.map(
          (data) =>
            ({
              id: data.payload.doc.id,
              ...(data.payload.doc.data() as ProjectData),
            } as ProjectData)
        )
      )
    );
}
