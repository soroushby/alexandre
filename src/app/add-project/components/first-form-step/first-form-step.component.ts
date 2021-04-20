import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectData } from 'src/app/interfaces/project-data';
import { addProjectService } from '../../services/add-project.service';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-first-form-step',
  templateUrl: './first-form-step.component.html',
  styleUrls: ['./first-form-step.component.scss'],
})
export class FirstFormStepComponent implements OnInit {
  @Output() emitProjectId = new EventEmitter<ProjectData>();
  form: any;
  isLinear = false;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;

  categories: any = [
    { value: 'restaurant', viewValue: 'restaurant' },
    { value: 'boulangerie', viewValue: 'boulangerie' },
    { value: 'architecture', viewValue: 'architecture' },
  ];

  isNewProjectAdded: boolean = false;

  watchNewProject$ = combineLatest([
    this.addProject.addProjectAnnounced$,
    this.dataService.gotData,
  ]).pipe(
    take(1),
    map(([project, projects]) => {
      console.log('projects :: ', projects);
      console.log('project :: ', project);
      const foundProject = projects.find(
        (item) => item.description === project.description
      );
      if (!!foundProject) {
        console.log('foundProject :: ', foundProject);
        this.emitProjectId.emit(foundProject);
      }
    })
  );

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private addProject: addProjectService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      categories: ['', Validators.required],
    });
    this.watchNewProject$.subscribe();
  }

  onSaveProject() {
    const description = this.form.get('description').value;
    const categories = this.form.get('categories').value;

    let project: ProjectData = {
      description,
      categories,
      photoUrl: '',
    };

    this.dataService.addProject(project).subscribe(() => {
      this.isNewProjectAdded = true;
      this.addProject.announceAddProject(project);
    });
  }
}
