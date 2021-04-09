import { AuthService } from '@auth0/auth0-angular';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectData } from 'src/app/interfaces/project-data';
import { concatMap, filter, last, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  data: Observable<ProjectData[]> | undefined;
  data1: any | undefined;
  form: any;
  fileName = '';
  id: any;

  someInput: String = '';

  downloadUrl$: Observable<string> | undefined;

  constructor(
    private dataService: DataService,
    private storage: AngularFireStorage,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.data = this.dataService.gotData.pipe(
      map((x) => x.filter((x) => x.categories == 'restaurant'))
    );

    this.data1 = this.dataService.gotData
      .pipe(
        map((x) =>
          x.filter((x) => x.categories == 'restaurant').map((x) => x.id)
        )
      )
      .subscribe((x) => (this.id = x));
    console.log(this.id);
  }

  onFileSelected(event: any, idMain: any) {
    const file: File = event.target.files[0];
    const filePath = `projects/${idMain}/${file.name}`;
    const task = this.storage.upload(filePath, file);
    this.downloadUrl$ = task.snapshotChanges().pipe(
      last(),
      concatMap(() => this.storage.ref(filePath).getDownloadURL())
    );
    this.downloadUrl$.subscribe(console.log);
    // if (file) {
    //   this.fileName = file.name;

    //   console.log(this.fileName);
    // }
  }

  onDeleteProject(id: any) {
    return this.dataService.deleteProjects(id);
  }
}
