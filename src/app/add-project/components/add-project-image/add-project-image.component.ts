import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { last, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-project-image',
  templateUrl: './add-project-image.component.html',
  styleUrls: ['./add-project-image.component.scss'],
})
export class AddProjectImageComponent implements OnInit {
  @Input() id: string | undefined; // decorate the property with @Input()
  fileName = '';
  data: any;
  projectPhotoUrl: any | undefined;
  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const filePath = `projects/${this.id}/${file.name}`;
    const task = this.storage.upload(filePath, file);
    this.projectPhotoUrl = task.snapshotChanges().pipe(
      last(),
      concatMap(() => this.storage.ref(filePath).getDownloadURL())
    );

    this.projectPhotoUrl.subscribe(console.log);
  }
}
