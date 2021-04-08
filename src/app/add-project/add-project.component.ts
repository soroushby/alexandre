import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from './../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
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
  // @Input
  // requiredFileType:string
  form: any;
  fileName = '';
  data: any;
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
      // photo: [null, Validators.required],
    });
    this.data = this.dataService.gotData
      .pipe(map((x) => x.map((x) => x.id)))
      .subscribe((x) => (this.data = x));
  }
  onAddDatas() {
    this.dataService.addProject(
      this.form.get('description').value,
      this.form.get('categories').value
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const filePath = `courses/${this.data}/${file.name}`;
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().subscribe((x) => console.log(x));
    // if (file) {
    //   this.fileName = file.name;

    //   console.log(this.fileName);
    // }
  }
}
