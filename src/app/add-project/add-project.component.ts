import { concatMap, last, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from './../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorage,
  AngularFireStorageModule,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ProjectData } from '../interfaces/project-data';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  form: any;
  fileName = '';
  data: any;
  projectPhotoUrl: any | undefined;

  newProjectId: string | undefined;

  isLinear = false;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;

  categories: any = [
    { value: 'restaurant', viewValue: 'restaurant' },
    { value: 'boulangerie', viewValue: 'boulangerie' },
    { value: 'architecture', viewValue: 'architecture' },
  ];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      categories: ['', Validators.required],
    });

    this.data = this.dataService.gotData
      .pipe(map((x) => x.map((x) => x.id)))
      .subscribe((x) => (this.data = x));
  }

  onSaveProject() {
    const description = this.form.get('description').value;
    const categories = this.form.get('categories').value;

    let project: ProjectData = {
      description,
      categories,
    };

    this.dataService.addProject(project);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // const filePath = `projects/${projectId}/${file.name}`;
    // const task = this.storage.upload(filePath, file);
    // this.projectPhotoUrl = task.snapshotChanges().pipe(
    //   last(),
    //   concatMap(() => this.storage.ref(filePath).getDownloadURL())
    // );

    // this.projectPhotoUrl.subscribe(console.log);
  }

  onNewProject(project: ProjectData) {
    console.log(`on new project :: `, project);
    if (!project) {
      return;
    }
    this.newProjectId = project.id;
  }
}
