import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { last, concatMap, take } from 'rxjs/operators';
import { ProjectData } from 'src/app/interfaces/project-data';

@Component({
  selector: 'app-add-project-image',
  templateUrl: './add-project-image.component.html',
  styleUrls: ['./add-project-image.component.scss'],
})
export class AddProjectImageComponent implements OnInit {
  @Input() project!: ProjectData;

  file: File | undefined;
  fileName = '';
  projectPhotoUrl: string | undefined;
  constructor(
    private storage: AngularFireStorage,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file?.name ?? '';
  }

  onUpload() {
    const filePath = `projects/${this.project.id}/${this.file?.name}`;
    const task = this.storage.upload(filePath, this.file);

    task
      .snapshotChanges()
      .pipe(
        last(),
        concatMap(() => this.storage.ref(filePath).getDownloadURL()),
        take(1)
      )
      .subscribe((fileUrl) => {
        this.projectPhotoUrl = fileUrl;
        console.log(fileUrl);
        this.dataService.updataProject(this.project.id, {
          ...this.project,
          photoUrl: this.projectPhotoUrl,
        });
      });
  }
}
