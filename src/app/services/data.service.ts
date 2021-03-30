import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}

  addProject(description: any) {
    this.db.collection('projects').add({
      description: description,
    });
  }

  getData() {
    return this.db
      .collection('projects')
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map(
            (data) =>
              <any>{
                id: data.payload.doc.id,
                ...(data.payload.doc.data() as any),
              }
          )
        )
      );
  }
}
