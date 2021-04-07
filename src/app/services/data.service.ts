import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { ProjectData } from '../interfaces/project-data';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}

  addProject(description: any, categories: any) {
    this.db.collection('projects').add({
      description: description,
      categories: categories,
    });
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
