import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/interfaces/project-data';

@Component({
  selector: 'app-first-form-step',
  templateUrl: './first-form-step.component.html',
  styleUrls: ['./first-form-step.component.scss'],
})
export class FirstFormStepComponent implements OnInit {
  form: any;
  isLinear = false;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;

  categories: any = [
    { value: 'restaurant', viewValue: 'restaurant' },
    { value: 'boulangerie', viewValue: 'boulangerie' },
    { value: 'architecture', viewValue: 'architecture' },
  ];

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      categories: ['', Validators.required],
    });
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
}
